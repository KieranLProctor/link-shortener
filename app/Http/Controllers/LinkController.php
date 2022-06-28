<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\UpdateLinkRequest;
use App\Models\Link;
use App\Models\LinkVisitor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class LinkController extends Controller
{
    public function index()
    {
        return Inertia::render('Links/Index', ['links' => auth()->user()->links]);
    }

    public function store(StoreLinkRequest $request)
    {
        $link = Link::create($request->validated());

        if (! $link) {
            session()->flash('flash.banner', 'Error shortening link!');
            session()->flash('flash.bannerStyle', 'success');

            return back();
        }

        session()->flash('flash.banner', 'Successfully shortened link!');
        session()->flash('flash.bannerStyle', 'success');

        return back()->with('link', $link);
    }

    public function show(Link $link)
    {
        LinkVisitor::create([
            'link_id' => $link->id,
            'user_id' => auth()->id() ?? null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);

        // This is below as we still want to log a visit to the link - it just shouldn't redirect.
        if (now() >= $link->expired_at || $link->trashed()) {
            abort(404);
        }

        return redirect()->away($link->url);
    }

    public function update(UpdateLinkRequest $request, Link $link)
    {
        if (auth()->id() != $link->user_id) {
            abort(403, 'Unauthorized action.');
        }

        $link->update($request->validated());

        return back();
    }

    public function destroy(Link $link)
    {
        if (auth()->id() != $link->user_id) {
            abort(403, 'Unauthorized action.');
        }

        $link->delete();

        return redirect()->route('links.index')->with('message', 'Successfully deleted link!');
    }
}
