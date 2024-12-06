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
        // Recreate the temp_images table
        Schema::create('temp_images', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->timestamps();
        });

        // Recreate the services table with a foreign key for image_id
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('short_desc')->nullable();
            $table->text('content')->nullable();
            $table->unsignedBigInteger('image_id')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();

            // Add foreign key constraint for image_id
            $table->foreign('image_id')->references('id')->on('temp_images')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
        Schema::dropIfExists('temp_images');
    }
};
