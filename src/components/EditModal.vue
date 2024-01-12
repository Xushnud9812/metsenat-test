<script setup>
import { ref } from 'vue'

import BaseSelect from '@/components/BaseSelect.vue'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedPerson = ref(people[0])
const isModal = ref(false)
const sponsor = ref(1)

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

</script>

<template>
  <div class="">
    <div class="fixed top-0 left-0 w-full h-screen  bg-black/50 z-30"></div>

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
          <div class="flex rounded overflow-hidden">
            <label for="jis"
              class="border-2  border-[#E0E7FF] flex-1 block text-center py-3.5 text-xs font-medium uppercase tracking-[1.125px]"
              :class="sponsor == 1 ? 'bg-primary text-white' : 'text-primary'">
              <input id="jis" class="hidden" type="radio" value="1" v-model="sponsor" name="shaxs">
              Jismoniy shaxs</label>
            <label for="yur"
              class="border-2 border-l-0 text-primary border-[#E0E7FF] flex-1 block text-center py-3.5 text-xs font-medium uppercase tracking-[1.125px]"
              :class="sponsor == 2 ? 'bg-primary text-white' : 'text-primary'">
              <input id="yur" class="hidden" type="radio" value="2" v-model="sponsor" name="shaxs">
              Yuridik shaxs
            </label>

          </div>



          <div>
            <h2 class="mb-2 text-xs font-medium uppercase font-rubik">F.I.Sh. (Familiya Ism Sharifingiz)</h2>
            <input placeholder="F.I.SH"
              class="w-full rounded-lg border border-[#E0E7FF] bg-[#E0E7FF33] py-2.5 pl-4 pr-10 text-left  focus:outline-none"
              type="text">
          </div>
          <div>
            <h2 class="mb-2 text-xs font-medium uppercase font-rubik">Telefon raqam</h2>
            <input placeholder="+998 973-72-60"
              class="w-full rounded-lg border border-[#E0E7FF] bg-[#E0E7FF33] py-2.5 pl-4 pr-10 text-left  focus:outline-none"
              type="text">
          </div>
          <div>
            <h2 class="mb-2 text-xs font-medium uppercase font-rubik">Holati</h2>
            <base-select />

          </div>
          <div>
            <h2 class="mb-2 text-xs font-medium uppercase font-rubik">Homiylik summasi</h2>
            <base-select />

          </div>
          <div>
            <h2 class="mb-2 text-xs font-medium uppercase font-rubik">To‘lov turi</h2>
            <base-select />

          </div>
          <div>
            <h2 class="mb-2 text-xs font-medium uppercase font-rubik">Tashkilot nomi</h2>
            <input placeholder="Orient Group"
              class="w-full rounded-lg border border-[#E0E7FF] bg-[#E0E7FF33] py-2.5 pl-4 pr-10 text-left  focus:outline-none"
              type="text">
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