<template>
  <div class="flex justify-between items-center">
    <div class="flex">
      <p><span>{{ totalItems }}</span> tadan
        <span>{{ from_page }}-{{ to_page }}</span> ko‘rsatilmoqda
      </p>
    </div>
    <nav class="flex gap-10">
      <!-- <div class="flex items-center gap-5">
        <p>Ko‘rsatish</p>
        <select class="focus:outline-none py-2 px-2.5" name="" id="">
          <option v-for="item, index in 10" :key="index" value="1">{{ item }}</option>
        </select>
      </div> -->
      <ul class="flex items-center gap-2">
        <li>
          <button class="border border-[#DFE3E8] p-1 rounded" type="button" @click="$emit('previous-page')"
            :class="currentPage === 1 ? 'opacity-50' : 'opacity-100'"
            :aria-label="`Go to the previous page, page ${currentPage - 1}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.8776 7.12747C15.0337 7.28355 15.0338 7.53658 14.8779 7.69284L10.8621 11.7175C10.7063 11.8736 10.7063 12.1264 10.8621 12.2825L14.8779 16.3072C15.0338 16.4634 15.0337 16.7164 14.8776 16.8725L14.033 17.7172C13.8768 17.8734 13.6235 17.8734 13.4673 17.7172L8.033 12.2828C7.87679 12.1266 7.87679 11.8734 8.033 11.7172L13.4673 6.28284C13.6235 6.12663 13.8768 6.12663 14.033 6.28284L14.8776 7.12747Z"
                fill="#979797" />
            </svg>
          </button>
        </li>
        <li class="flex items-center " v-for="(page, index) in pagination" :key="index">
          <button class="border  p-1 px-3 bg-white rounded" v-if="typeof page === 'number'" type="button"
            :class="currentPage === page ? 'border-primary text-primary' : 'border-[#DFE3E8]'"
            :aria-label="getButtonLabel(page)" @click="$emit('change', page)">
            {{ page }}
          </button>
          <span v-else>{{ page }}</span>
        </li>
        <li>
          <button class="border border-[#DFE3E8] p-1 rounded" type="button" @click="$emit('next-page')"
            :class="currentPage === totalPages ? 'opacity-50' : 'opacity-100'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.12238 7.12747C8.96629 7.28355 8.96615 7.53658 9.12207 7.69284L13.1379 11.7175C13.2937 11.8736 13.2937 12.1264 13.1379 12.2825L9.12207 16.3072C8.96615 16.4634 8.96629 16.7164 9.12238 16.8725L9.967 17.7172C10.1232 17.8734 10.3765 17.8734 10.5327 17.7172L15.967 12.2828C16.1232 12.1266 16.1232 11.8734 15.967 11.7172L10.5327 6.28284C10.3765 6.12663 10.1232 6.12663 9.967 6.28284L9.12238 7.12747Z"
                fill="#C4CDD5" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import usePagination from "@/composable/usePagination";

const props = defineProps(["visiblePages", "totalPages", "currentPage", "totalItems", 'to_page', 'from_page']);

const { pagination } = usePagination(
  toRef(props, "totalPages"),
  toRef(props, "visiblePages"),
  toRef(props, "currentPage")
);

console.log('pagination', pagination)

function getButtonLabel(page: number) {
  if (page === props.totalPages) {
    return `Go to page ${page}, the last page`;
  } else {
    return `Go to page ${page}`;
  }
}
</script>

<style scoped >
* {
  box-sizing: border-box;
}


button[aria-current] {
  outline: blue 2px solid;
  outline-offset: 2px;
}

button[aria-disabled] {
  opacity: 50%;
}
</style>