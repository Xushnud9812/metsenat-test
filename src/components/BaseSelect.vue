<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<template>
  <div>
    <Listbox v-model="selectedPerson">
      <div class="relative mt-1">
        <ListboxButton
          class=" relative w-full cursor-default rounded-lg border border-[#E0E7FF] bg-[#E0E7FF33] py-2.5 pl-4 pr-10 text-left  focus:outline-none">
          <span class="block truncate">{{ selectedPerson.name }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M15.8521 7.60181C16.2101 7.24383 16.7905 7.24383 17.1485 7.60181C17.5065 7.95979 17.5065 8.54019 17.1485 8.89817L11.6485 14.3982C11.3015 14.7452 10.7427 14.7573 10.3809 14.4257L4.88091 9.38405C4.50772 9.04195 4.48251 8.4621 4.8246 8.08891C5.16669 7.71572 5.74655 7.6905 6.11974 8.0326L10.9728 12.4812L15.8521 7.60181Z"
                fill="#B5B5C3" />
            </svg>
          </span>
        </ListboxButton>

        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 divide-y w-full overflow-auto rounded-md bg-white py-1 text-base border border-[#E0E7FF]">
            <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.name" :value="person"
              as="template">
              <li :class="[
                active ? 'bg-primary/10 ' : 'text-gray-900',
                'relative cursor-default select-none py-2  px-4',
              ]">
                <span :class="[
                  selected ? 'font-medium text-primary' : 'font-normal',
                  'block truncate',
                ]">{{ person.name }}</span>

              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>

  </div>
</template>