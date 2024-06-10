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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            // $table->String('order_id')->nullable();
            $table->String('user_id');
            // $table->String('user_name');
            $table->String('order_number')->default('');
            $table->integer('total_price');
            $table->enum('progress', ['Done', 'Preparing', 'Waiting', 'Ready'])->default('Waiting');
            $table->enum('status', ['Unpaid', 'Paid'])->default('Unpaid');
            $table->String('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
