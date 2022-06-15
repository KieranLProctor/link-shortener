<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\LinkVisitor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $links = Link::where('user_id', auth()->id())->with('visitors')->get();

        return Inertia::render('Links/Index', ['links' => $links]);

        // return Inertia::render('Links/Index', ['links' => auth()->user()->links]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Links/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // At some point need to improve this to check if the code already exists.
        $validated = $request->validate([
            'url' => ['required']
        ]);

        Link::create([
            'user_id' => auth()->id(),
            'url' => $validated["url"],
            'code' => Str::random(6)
        ]);

        // return redirect()->route('links.index')->with('message', 'Successfully shortened link!');

        return back()->with('message', 'Successfully shortened link!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function show(Link $link)
    {
        LinkVisitor::create([
            'link_id' => $link->id,
            'user_id' => auth()->id() ?? null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent()
        ]);

        return redirect()->away($link->url);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function edit(Link $link)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Link $link)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function destroy(Link $link)
    {
        //
    }
}
