<?php

namespace App\Enums;

enum LinkStatus: string {
    case ACTIVE = 'active';
    case EXPIRED = 'expired';
    case ON_HOLD = 'on hold';
    case BLOCKED = 'blocked';
    case DELETED = 'deleted';
}
