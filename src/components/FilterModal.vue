<script setup lang="ts">
import { ref } from 'vue'
import BaseSelect from '@/components/BaseSelect.vue'

const activeBtn = ref(1)

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

</script>

<template>
  <div class="">
    <div class="fixed top-0 left-0 w-full h-screen bg-black/50 z-10"></div>

    <div class="absolute h-screen   overflow-auto  bg-transparent top-0 left-0 w-full  z-30 no-scrollbar">
      <div class="z-20    w-[600px]  bg-white rounded-xl py-7 px-8 my-20 mx-auto">

        <div class="mb-7 pb-7 flex justify-between border-b border-[#F5F5F7]">
          <h1>Filter</h1>
          <button @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M21 7L7 21" stroke="#B2B7C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 7L21 21" stroke="#B2B7C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div class="flex flex-col gap-7">
          <div>
            <h2>Ariza holati</h2>
            <base-select />
          </div>

          <div>
            <h2>Homiylik summasi</h2>
            <div class="grid grid-cols-4 gap-3">
              <button @click="activeBtn = 0" :class="activeBtn == 0 ? 'border border-primary' : ''"
                class="relative font-medium font-rubik text-[13px]  p-4 rounded bg-[#E0E7FF]">Barchasi

                <span v-if="activeBtn == 0" class="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#2E5BFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.8775 6.15369L7.09155 10.9675C6.78331 11.2775 6.2843 11.2775 5.97685 10.9675L3.97766 8.95743C3.67021 8.6474 3.67021 8.14549 3.97766 7.83546C4.28589 7.52622 4.7849 7.52622 5.09235 7.83546L6.5342 9.2857L10.7628 5.03251C11.0702 4.72248 11.5692 4.72248 11.8775 5.03251C12.1857 5.34175 12.1857 5.84366 11.8775 6.15369Z"
                      fill="white" />
                  </svg></span>
              </button>
              <button :class="activeBtn == index + 1 ? 'border border-primary' : 'border border-[#E0E7FF]'"
                class="relative flex items-center gap-1 font-medium font-rubik text-[13px]  p-4 rounded "
                v-for="btn, index in 6" :key="btn + index" @click="activeBtn = index + 1">1
                000 000
                <span v-if="activeBtn == index + 1" class="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#2E5BFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.8775 6.15369L7.09155 10.9675C6.78331 11.2775 6.2843 11.2775 5.97685 10.9675L3.97766 8.95743C3.67021 8.6474 3.67021 8.14549 3.97766 7.83546C4.28589 7.52622 4.7849 7.52622 5.09235 7.83546L6.5342 9.2857L10.7628 5.03251C11.0702 4.72248 11.5692 4.72248 11.8775 5.03251C12.1857 5.34175 12.1857 5.84366 11.8775 6.15369Z"
                      fill="white" />
                  </svg></span>
                <span class="text-[12px] text-primary uppercase">uzs</span></button>
            </div>
          </div>

          <div>
            <h2>Homiylik summasi</h2>
            <input
              class="rounded-lg border border-[#E0E7FF] bg-[#E0E7FF33] py-2.5 pl-4 pr-10 text-left  focus:outline-none"
              type="date">
          </div>
        </div>

        <div class="mt-7 pt-7 flex  gap-4 justify-end border-t border-[#F5F5F7]">
          <button class="text-[#B2B7C1] flex items-center rounded gap-1 py-2 px-5 border border-[#B2B7C1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M21 7L7 21" stroke="#B2B7C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 7L21 21" stroke="#B2B7C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Tozalash
          </button>
          <button class="flex items-center rounded gap-1 py-2 px-5 bg-primary text-white border border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12C2 12 5.63636 4.72729 12 4.72729C18.3636 4.72729 22 12 22 12C22 12 18.3636 19.2727 12 19.2727C5.63636 19.2727 2 12 2 12Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M11.9997 14.7273C13.506 14.7273 14.727 13.5063 14.727 12C14.727 10.4938 13.506 9.27277 11.9997 9.27277C10.4935 9.27277 9.27246 10.4938 9.27246 12C9.27246 13.5063 10.4935 14.7273 11.9997 14.7273Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Natijalarni ko‘rish
          </button>
        </div>
      </div>
    </div>

  </div>
</template>