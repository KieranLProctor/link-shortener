<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LinkVisitor extends Model
{
    use HasFactory;

    protected $fillable = [
        'link_id',
        'user_id',
        'ip_address',
        'user_agent',
    ];
}
