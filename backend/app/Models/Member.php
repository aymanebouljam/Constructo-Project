<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    // Define the fillable properties
    protected $fillable = [
        'name',
        'job_title',
        'linkedin_url',
        'image_id',
        'status',
    ];

    // Define the relationship to the TempImage model
    public function image()
    {
        return $this->belongsTo(TempImage::class, 'image_id');
    }
}
