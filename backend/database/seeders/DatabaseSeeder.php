<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a new admin with a temporary password
        User::factory()->withTemporaryPassword()->create([
            'name' => 'Root',
            'email' => 'root@constructo.ma',
        ]);
    }
}
