<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // You can pass the 'temporary' parameter to the factory to create a user with a temporary password
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'), // Temporary password
            'remember_token' => Str::random(10),
            'temporary_password' => false, // Default is false
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Indicate that the user has a temporary password.
     */
    public function withTemporaryPassword(): static
    {
        return $this->state(fn (array $attributes) => [
            'password' => Hash::make('root'), // Set the temporary password
            'temporary_password' => true, // Flag that the user has a temporary password
        ]);
    }
}
