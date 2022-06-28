<?php

namespace Database\Seeders;

use App\Models\LinkReportReason;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LinkReportReasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LinkReportReason::factory()->createMany([
            [
                'title' => 'Malicious',
                'description' => 'Stores, accesses or transmits viruses, codes or any other malicious material.',
            ],
            [
                'title' => 'Pornography',
                'description' => 'Depicts sexually explicit images.',
            ],
            [
                'title' => 'Illegal Activity',
                'description' => 'Promotes or facilitates illegal activity.',
            ],
            [
                'title' => 'Violence',
                'description' => 'Promotes violence.',
            ],
            [
                'title' => 'Discriminatory',
                'description' => 'Discriminatory based on race, gender, colour, religious belief, sexual orientation or disability.',
            ],
            [
                'title' => 'Other',
                'description' => 'Doesn\'t fit into any of the above categories.'
            ]
        ]);
    }
}
