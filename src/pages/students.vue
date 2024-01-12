<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/api'
import BasePagination from '../components/BasePagination.vue';

import { useRouter } from 'vue-router'

const students = ref()
const totalStudents = ref()
const currentPage = ref<Number>(1)
const totalPages = ref<Number>(1)
const from_page = ref<Number>(1)
const to_page = ref<Number>(10)
const fetchData = async () => {
  try {
    const response = await api.get('/student-list/');
    students.value = response.data.results
    totalStudents.value = response.data.count
    totalPages.value = Math.ceil(response.data.count / 10)
    to_page.value = currentPage.value * 10
    from_page.value = to_page.value - 9
    console.log(response)
    console.log(response)
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

fetchData()

watch(currentPage, (newpage) => {
  fetchData()
})


const goToPage = (page: number) => {
  currentPage.value = page;
}

const router = useRouter()



</script>

<template>
  <div class=" container">

    <div class="my-7 flex justify-end">
      <button class="flex items-center gap-2.5 bg-primary text-white py-2 px-8 rounded"><svg
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19.9999 11.9999H4.00007" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M12 4V19.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg> Talaba qo‘shish</button>
    </div>


    <table class="border-separate border-spacing-y-3 w-full">
      <thead>
        <tr>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik px-4">#</th>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik">
            <p class="text-left">F.I.SH</p>
          </th>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik">Talabalik turi</th>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik">OTM</th>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik">Ajratilingan summa</th>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik">Kontrakt miqdori</th>
          <th class="text-[#B1B1B8] uppercase font-medium text-xs font-rubik">Amallar</th>
        </tr>
      </thead>
      <tbody>
        <tr class=" py-5 rounded-xl " v-for="item, index in students" :key="index">
          <td class="py-5 bg-white text-center rounded-l-xl">
            {{ to_page - 9 + index }}</td>
          <td class="bg-white   ">
            <h1 class="font-rubik font-medium">{{ item.full_name }}</h1>
          </td>
          <td class="bg-white text-center  ">
            <p class="font-rubik">Bakalavr</p>
          </td>
          <td class="bg-white max-w-[200px]  ">
            <p class="font-rubik text-center">{{ item.institute.name }}</p>

          </td>
          <td class="bg-white   ">
            <h2 class="flex justify-center items-center font-rubik gap-0.5 text-[14px] font-medium text-[#2E384D]">
              {{ item.given.toLocaleString() }} <span class="text-[#B2B7C1]">UZS</span></h2>
          </td>
          <td class="bg-white text-center  ">
            <h2 class="flex justify-center items-center font-rubik gap-0.5 text-[14px] font-medium text-[#2E384D]"> {{
              item.contract.toLocaleString() }} <span class="text-[#B2B7C1]">UZS</span></h2>
          </td>

          <td class="bg-white text-center rounded-r-xl ">
            <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.4"
                  d="M23.855 11.3917C21.5954 6.98292 17.1221 4 12 4C6.87789 4 2.40331 6.985 0.144977 11.3921C0.0496613 11.5806 0 11.7889 0 12.0002C0 12.2115 0.0496613 12.4198 0.144977 12.6083C2.40456 17.0171 6.87789 20 12 20C17.1221 20 21.5966 17.015 23.855 12.6079C23.9503 12.4194 24 12.2111 24 11.9998C24 11.7885 23.9503 11.5802 23.855 11.3917ZM12.0058 18H12C10.4097 17.9992 8.88485 17.3669 7.76077 16.2419C6.63669 15.117 6.00542 13.5917 6.00581 12.0015C6.0062 10.4112 6.6382 8.88618 7.76283 7.76182C8.88746 6.63747 10.4126 6.00583 12.0029 6.00583C13.5932 6.00583 15.1183 6.63747 16.243 7.76182C17.3676 8.88618 17.9996 10.4112 18 12.0015C18.0004 13.5917 17.3691 15.117 16.245 16.2419C15.1209 17.3669 13.5961 17.9992 12.0058 18Z"
                  fill="#3366FF" />
                <path
                  d="M15.8608 13.0363C15.7247 13.5433 15.4899 14.0186 15.1698 14.4347C14.8497 14.8509 14.4506 15.1998 13.9955 15.4614C13.5403 15.7231 13.038 15.8924 12.5173 15.9596C11.9966 16.0268 11.4677 15.9906 10.961 15.853C10.4544 15.7155 9.97979 15.4794 9.56452 15.1581C9.14926 14.8368 8.80147 14.4368 8.54107 13.9809C8.28068 13.525 8.11279 13.0222 8.04704 12.5013C7.98129 11.9805 8.01897 11.4517 8.15791 10.9454C8.54194 11.228 9.01453 11.3636 9.48997 11.3277C9.96541 11.2917 10.4122 11.0865 10.7494 10.7494C11.0865 10.4122 11.2917 9.96542 11.3276 9.48998C11.3636 9.01454 11.228 8.54195 10.9454 8.15792C11.6237 7.96431 12.3412 7.95486 13.0243 8.13054C13.7075 8.30621 14.3314 8.66067 14.8321 9.15747C15.3328 9.65426 15.6922 10.2755 15.8732 10.9572C16.0542 11.6389 16.0504 12.3565 15.8621 13.0363H15.8608Z"
                  fill="#3366FF" />
              </svg></button>
          </td>
        </tr>

      </tbody>
    </table>

    <div class="my-10">
      <base-pagination :currentPage="currentPage" :totalItems="totalStudents" :totalPages="totalPages" :visiblePages="10"
        @change="goToPage" @next-page="currentPage++" @previous-page="currentPage--" :to_page="to_page"
        :from_page="from_page" />
    </div>

  </div>
</template>
