<script setup>
import { PhotoIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="">
    <header class="relative bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Uploads
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="col-span-full">
          <div class="mb-4">
            <label
              for="cover-photo"
              class="block text-sm/6 font-medium text-gray-900"
              >Image</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            >
              <div class="text-center">
                <PhotoIcon
                  class="mx-auto size-12 text-gray-300"
                  aria-hidden="true"
                />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="sm:col-span-3">
              <label
                for="label"
                class="block text-sm/6 font-medium text-gray-900"
                >Label</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="label"
                  id="label"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>