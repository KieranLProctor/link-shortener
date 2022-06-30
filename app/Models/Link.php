<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\ModelStatus\HasStatuses;

class Link extends Model
{
    use HasFactory;
    use SoftDeletes;
    use HasStatuses;

    protected $fillable = [
        'user_id',
        'code',
        'url',
        'expires_at',
    ];

    protected $appends = [
        'is_expired',
        'current_status'
    ];

    protected $casts = [
        'expires_at' => 'datetime',
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

    public function status()
    {
        return $this->status();
    }

    protected function isExpired(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['expires_at'] <= Carbon::now() ? true : false
        );
    }

    protected function currentStatus(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->status
        );
    }
}
