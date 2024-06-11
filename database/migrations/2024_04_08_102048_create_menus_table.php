<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name")->unique();
            $table->string("description");
            $table->string("category");
            $table->integer("price");
            $table->integer("discounted_price")->nullable();
            $table->integer("stock");
            $table->integer("like_count")->default(0);
            $table->string("image");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
