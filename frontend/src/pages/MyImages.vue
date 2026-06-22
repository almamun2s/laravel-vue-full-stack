<template>
  <div class="">
    <header class="relative bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          My Images
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="col-span-full">
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <div
              v-for="image in images"
              :key="image.id"
              class="overflow-hidden rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                :src="image.url"
                :alt="image.label"
                class="h-48 w-full object-cover"
              />

              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ image.label }}
                </h3>
                <div class="mt-4 flex gap-2">
                  <button
                    @click="copyImageUrl(image.url)"
                    class="flex-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Copy URL
                  </button>

                  <button
                    @click="deleteImage(image.id)"
                    class="flex-1 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axiosClient from "../axios";
import { ref } from "vue";

const images = ref([]);

onMounted(() => {
  axiosClient
    .get("/api/image")
    .then((response) => {
      images.value = response.data;
      console.log("Fetched images:", images.value);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
});

function deleteImage(id) {
  if (!confirm("Are you sure want to delete this image?")) {
    return;
  }
  axiosClient
    .delete(`/api/image/${id}`)
    .then(() => {
      images.value = images.value.filter((image) => image.id !== id);
    })
    .catch((error) => {
      console.error("Error deleting image:", error);
    });
}

function copyImageUrl(url) {
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Image URL copied to clipboard!");
    })
    .catch((error) => {
      console.error("Error copying URL:", error);
    });
}
</script>

<style scoped>
</style>