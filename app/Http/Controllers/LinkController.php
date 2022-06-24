<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateLinkRequest;
use App\Models\Link;
use App\Models\LinkVisitor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class LinkController extends Controller
{
    public function index()
    {
        $links = Auth::user()->links;

        return Inertia::render('Links/Index', ['links' => $links]);
    }

    public function store(StoreUpdateLinkRequest $request)
    {
        $validated = $request->validated();

        $link = Link::create([
            'user_id' => auth()->id(),
            'url' => $validated['url'],
            'code' => Str::random(6),
            'expired_at' => now()->addMonth(),
        ]);

        if (! $link) {
            session()->flash('flash.banner', 'Error shortening link!');
            session()->flash('flash.bannerStyle', 'success');

            return redirect()->back();
        }

        session()->flash('flash.banner', 'Successfully shortened link!');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->back()->with('link', $link);
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

    public function info(Link $link)
    {
        return Inertia::render('Links/Info', ['link' => $link->with('visitors')->get()]);
    }

    public function update(StoreUpdateLinkRequest $request, Link $link)
    {
        if (auth()->id() != $link->user_id) {
            abort(403, 'Unauthorized action.');
        }

        $validated = $request->validated();

        $link->update($validated);
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
