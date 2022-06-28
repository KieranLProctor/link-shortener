<?php

use App\Models\User;
use App\Models\Link;
use App\Models\LinkReportReason;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Link::class)->constrained();
            $table->foreignIdFor(User::class)->nullable()->index();
            $table->foreignIdFor(LinkReportReason::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('link_reports');
    }
};
