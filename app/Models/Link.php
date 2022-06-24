<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Link extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'code',
        'url',
        'expired_at',
    ];

    protected $appends = ['is_expired'];

    protected $casts = [
        'expired_at' => 'datetime',
    ];

    public function getRouteKeyName()
    {
        return 'code';
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function visitors(): HasMany
    {
        return $this->hasMany(LinkVisitor::class);
    }

    protected function isExpired(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['expired_at'] <= Carbon::now() ? true : false
        );
    }
}
