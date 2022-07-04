<?php

namespace App\Http\Controllers;

use App\Enums\LinkStatus;
use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\StoreLinkVisitorRequest;
use App\Http\Requests\UpdateLinkRequest;
use Illuminate\Support\Facades\Gate;
use App\Models\Link;
use App\Models\LinkVisitor;
use Carbon\Carbon;
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
            $link->setStatus(LinkStatus::ACTIVE->value);

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
        // is_null is to check links which don't expire.
        if(!is_null($link->expires_at) && $link->expires_at <= Carbon::now() && $link->status != LinkStatus::EXPIRED->value)
        {
            $link->setStatus(LinkStatus::EXPIRED->value);
        }

        // This is below as we still want to log a visit to the link - it just shouldn't redirect.
        if ($link->status != LinkStatus::ACTIVE->value || now() >= $link->expires_at || $link->trashed()) {
            abort(410); // TODO: Change this to 410
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

        try {
            $link->setStatus(LinkStatus::DELETED->value);
            $link->delete();

            session()->flash('flash.banner', 'Successfully deleted link!');
            session()->flash('flash.bannerStyle');
        } catch (\Exception $ex) {
            session()->flash('flash.banner', 'Error deleting link!');
            session()->flash('flash.bannerStyle', 'error');
        }

        return redirect()->route('links.index');
    }
}
