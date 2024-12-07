<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // Define the fillable properties
    protected $fillable = [
        'title',
        'slug',
        'short_desc',
        'content',
        'construction_type',
        'sector',
        'location',
        'image_id',
        'status',
    ];

    // Define the relationship to the TempImage model
    public function image()
    {
        return $this->belongsTo(TempImage::class, 'image_id');
    }
}
