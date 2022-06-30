<?php

namespace App\Policies;

use App\Models\Link;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class LinkPolicy
{
    use HandlesAuthorization;

    public function update(User $user, Link $link)
    {
        return $user->id === $link->user_id;
    }

    public function delete(User $user, Link $link)
    {
        return $user->id === $link->user_id;
    }
}
