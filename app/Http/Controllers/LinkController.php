<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\StoreLinkVisitorRequest;
use App\Http\Requests\UpdateLinkRequest;
use Illuminate\Support\Facades\Gate;
use App\Models\Link;
use App\Models\LinkVisitor;
use Inertia\Inertia;

class LinkController extends Controller
{
    public function index()
    {
        return Inertia::render('Links/Index', ['links' => auth()->user()->links]);
    }

    public function store(StoreLinkRequest $request)
    {
        try {
            $link = Link::create($request->validated());
            $link->setStatus('active');

            session()->flash('flash.banner', 'Successfully shortened link!');
            session()->flash('flash.bannerStyle');

            return back()->with('link', $link);
        } catch (\Exception $ex) {
            session()->flash('flash.banner', 'Error shortening link!');
            session()->flash('flash.bannerStyle', 'error');

            return back();
        }
    }

    public function show(StoreLinkVisitorRequest $request, Link $link)
    {
        LinkVisitor::create($request->validated());

        // TODO: Move this to a better place?
        if($link->expires_at >= now() && $link->status != 'expired')
        {
            $link->setStatus('expired');
        }

        // This is below as we still want to log a visit to the link - it just shouldn't redirect.
        if ($link->status != 'active' || now() >= $link->expires_at || $link->trashed()) {
            abort(401); // TODO: Change this to 410
        }

        return redirect()->away($link->url);
    }

    public function update(UpdateLinkRequest $request, Link $link)
    {
        Gate::authorize('update', $link);

        $link->update($request->validated());

        return back();
    }

    public function destroy(Link $link)
    {
        Gate::authorize('delete', $link);

        $link->setStatus('deleted');
        $link->delete();

        return redirect()->route('links.index')->with('message', 'Successfully deleted link!');
    }
}
