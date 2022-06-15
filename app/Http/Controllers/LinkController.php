<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\LinkVisitor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class LinkController extends Controller
{
    public function index()
    {
        $links = Link::where('user_id', auth()->id())->with('visitors')->get();

        return Inertia::render('Links/Index', ['links' => $links]);

        // return Inertia::render('Links/Index', ['links' => auth()->user()->links]);
    }

    public function create()
    {
        return Inertia::render('Links/Create');
    }

    public function store(Request $request)
    {
        // At some point need to improve this to check if the code already exists.
        $validated = $request->validate([
            'url' => ['required']
        ]);

        $link = Link::create([
            'user_id' => auth()->id(),
            'url' => $validated["url"],
            'code' => Str::random(6),
            'expired_at' => now()->addMonth(),
        ]);

        // return redirect()->route('links.index')->with('message', 'Successfully shortened link!');

        return redirect()->back()->with('link', $link);
    }

    public function show(Link $link)
    {
        if(now() >= $link->expired_at)
        {
            abort(404);
        }

        LinkVisitor::create([
            'link_id' => $link->id,
            'user_id' => auth()->id() ?? null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent()
        ]);

        return redirect()->away($link->url);
    }

    public function info(Link $link)
    {
        return Inertia::render('Links/Info', ['link' => $link]);
    }

    public function edit(Link $link)
    {

    }

    public function update(Request $request, Link $link)
    {
        //
    }

    public function destroy(Link $link)
    {
        //
    }
}
