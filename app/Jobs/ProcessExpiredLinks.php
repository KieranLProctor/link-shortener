<?php

namespace App\Jobs;

use App\Enums\LinkStatus;
use App\Models\Link;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessExpiredLinks implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $links = Link::where('expires_at', '<=', Carbon::now())->get();

        foreach($links as $link)
        {
            if($link->status != LinkStatus::ACTIVE->value)
            {
                continue;
            }

            $link->setStatus(LinkStatus::EXPIRED->value);
        }
    }
}
