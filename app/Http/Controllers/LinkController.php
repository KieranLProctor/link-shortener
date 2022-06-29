<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\StoreLinkVisitorRequest;
use App\Http\Requests\UpdateLinkRequest;
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

        // This is below as we still want to log a visit to the link - it just shouldn't redirect.
        if (now() >= $link->expired_at || $link->trashed()) {
            abort(410);
        }

        //return redirect()->away($link->url);
    }

    public function update(UpdateLinkRequest $request, Link $link)
    {
        // TODO: Move this into a gate/middleware.
        if (auth()->id() != $link->user_id) {
            abort(403, 'Unauthorized action.');
        }

        $link->update($request->validated());

        return back();
    }

    public function destroy(Link $link)
    {
        // TODO: Move this into a gate/middleware.
        if (auth()->id() != $link->user_id) {
            abort(403, 'Unauthorized action.');
        }

        $link->delete();

        return redirect()->route('links.index')->with('message', 'Successfully deleted link!');
    }
}
