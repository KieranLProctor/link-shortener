<?php

use App\Models\Link;
use App\Models\User;
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
        Schema::create('link_visitors', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Link::class)->constrained();
            $table->foreignIdFor(User::class)->nullable()->constrained(); // This is to see if users of the shortener are also visiting the links.
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->text('payload');
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
        Schema::dropIfExists('link_visitors');
    }
};
