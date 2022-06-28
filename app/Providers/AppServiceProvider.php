<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Inertia::share(function () {
        //     return [
        //         'app' => [
        //             'url' => config('app.url'),
        //         ],
        //     ];
        // });

        Inertia::share('app', [
            'name' => config('app.name'),
            'url' => config('app.url'),
        ]);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
