---
title: How to Write Clean Code in Laravel
date: 2021-07-4 10:00:00
slug: how-to-write-clean-code-in-laravel
image: '/images/presentations/how-to-write-clean-code-in-laravel.jpeg'
tags: ['laravel', 'clean-code']
summery: "Here you can find 20+ DOS and DON'TS which are usually ignored in real life of our Laravel projects."
description: "Here you can find 20+ DOS and DON'TS which are usually ignored in real life of our Laravel projects."
---

<section class="section bg-gradient-to-br from-red-500 to-red-800">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex flex-col justify-center">
      <div class="max-w-4xl">
        <div class="flex flex-col">
          <img src="/images/laravel.svg" alt="laravel logo" class="w-20 lg:w-32 xl:w-48">
          <h1 class="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mt-10 xl:leading-snug">How to Write Clean Code in Laravel</h1>
        </div>
      </div>
      <div class="border-t border-white mt-32 pt-6">
        <p class="text-white text-sm font-light">Host: <strong>Mohammad Rahmani</strong></p>
        <p class="text-white text-sm font-light mt-3">Date: <strong>July 4, 2021</strong></p>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto lg:max-w-4xl xl:max-w-7xl px-10 lg:px-20">
    <div class="min-h-screen flex flex-col justify-center text-center">
      <h2 class="leading-normal text-3xl xl:text-6xl xl:leading-normal font-light">“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</h2>
      <p class="text-white font-light mt-16">
        Martin Fowler<br>
        Software Developer
        <br>
        <small>(martinfowler.com)</small>
      </p>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex flex-col justify-center text-center">
      <h2 class="text-4xl lg:text-6xl xl:text-8xl font-bold">DOS & DON'TS</h2>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Controller name SHOULD start with a noun (in singular form) followed by the word “Controller”.
          </h2>
          <img src="/images/presentations/laravel-clean-code/1.png" alt="controller" class="col-span-12 lg:col-span-3">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/2.png" alt="model" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Model names SHOULD be in singular form with its first letter in uppercase
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Migration filenames SHOULD follow to following pattern
          </h2>
          <img src="/images/presentations/laravel-clean-code/3.png" alt="migration" class="col-span-12 lg:col-span-3">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/4.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Model properties SHOULD be in snake_case
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Table column names SHOULD be in snake_case without the model name
          </h2>
          <img src="/images/presentations/laravel-clean-code/5.png" alt="migration" class="col-span-12 lg:col-span-3">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/6.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            hasOne or belongsTo relationship methods MUST be in singular form
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-xl text-center lg:text-left lg:text-3xl xl:text-4xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            You SHOULD Use Resource Controllers unless you have any particular reason not to do so
          </h2>
          <img src="/images/presentations/laravel-clean-code/7.png" alt="migration" class="col-span-12 lg:col-span-3">
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/8.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-3xl xl:text-5xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Methods should be in camelCase
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Routes should be in plural form of the resource it is trying to manipulate and SHOULD be all lower-case
          </h2>
          <img src="/images/presentations/laravel-clean-code/9.png" alt="migration" class="col-span-12 lg:col-span-3">
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/10.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            FormRequests have been around since Laravel 5.0 so Move validation from controllers to Request classes.
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-xl text-center lg:text-left lg:text-2xl xl:text-3xl lg:leading-tight font-semibold col-span-12 lg:col-span-2">
            Let the code speak for itself. Your controllers will become bloated every time you validate. Write scalable code through dependency injection.
          </h2>
          <img src="/images/presentations/laravel-clean-code/11.png" alt="migration" class="col-span-12 lg:col-span-3">
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/12.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-md text-center lg:text-left lg:text-xl xl:text-2xl xl:leading-snug font-semibold col-span-12 lg:col-span-2">
            When injecting a model ID to a route or controller action, you will often query to retrieve the model that corresponds to that ID. Laravel’s route model binding provides a convenient way to automatically inject the model instances directly into your routes.
          </h2>
          <div class="h-24 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            <strong>Single responsibility principle</strong>, A class and a method should have only one responsibility.
          </h2>
          <img src="/images/presentations/laravel-clean-code/13.png" alt="migration" class="col-span-12 lg:col-span-3">
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/14.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            A Good Example: <strong>Single responsibility principle</strong>, A class and a method should have only one responsibility.
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 items-center">
          <h2 class="text-xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Fat models, skinny controllers, Put all DB related logic into Eloquent models or into Repository classes if you're using Query Builder or raw SQL queries.
          </h2>
          <div class="col-span-12 lg:col-span-3">
            <img src="/images/presentations/laravel-clean-code/15.png" alt="migration" class="w-3/4 lg:w-full m-auto">
          </div>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <div class="col-span-12 lg:col-span-3">
            <img src="/images/presentations/laravel-clean-code/16.png" alt="migration" class="w-3/4 lg:w-full m-auto">
          </div>
          <h2 class="text-xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Don't repeat yourself (DRY), Reuse code when you can. SRP is helping you to avoid duplication. Also, reuse Blade templates, use Eloquent scopes etc.
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Eloquent allows you to write readable and maintainable code. Also, Eloquent has great built-in tools like soft deletes, events, scopes etc.
          </h2>
          <img src="/images/presentations/laravel-clean-code/17.png" alt="migration" class="col-span-12 lg:col-span-3">
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/18.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left lg:text-3xl lg:leading-tight font-semibold col-span-12 lg:col-span-2">
            Use config and language files, constants instead of text in the code
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-500 to-yellow-600">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Store dates in the standard format. Use accessors and mutators to modify date format
          </h2>
          <img src="/images/presentations/laravel-clean-code/19.png" alt="migration" class="col-span-12 lg:col-span-3">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-yellow-600 to-yellow-500">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex items-center">
      <div class="max-w-7xl m-auto">
        <div class="grid lg:grid-cols-5 gap-5 items-center">
          <img src="/images/presentations/laravel-clean-code/20.png" alt="migration" class="col-span-12 lg:col-span-3">
          <h2 class="text-2xl text-center lg:text-left xl:text-3xl xl:leading-tight font-semibold col-span-12 lg:col-span-2">
            Use Mass assignment in one line instead of too many lines and assign data to each field
          </h2>
          <div class="h-20 md:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-gradient-to-b from-green-900 to-green-800">
  <div class="mx-auto px-10 lg:px-20">
    <div class="min-h-screen flex flex-col justify-center">
      <div class="max-w-4xl m-auto">
        <div class="flex flex-col text-center">
          <h3 class="text-3xl lg:text-5xl xl:text-7xl font-bold text-yellow-500">Other good practices</h3>
          <p class="text-2xl lg:text-3xl font-light text-white mt-40">Never put any logic in routes files.</p>
          <p class="text-2xl lg:text-3xl font-light text-white mt-5">Minimize usage of vanilla PHP in Blade templates.</p>
        </div>
      </div>
      <div class="border-t border-white py-10">
        <p class="text-white text-sm font-light">Host: <strong>Mohammad Rahmani</strong></p>
        <p class="text-white text-sm font-light mt-3">Date: <strong>July 4, 2021</strong></p>
      </div>
    </div>
  </div>
</section>
