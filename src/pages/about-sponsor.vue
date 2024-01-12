
import Navbar from '../components/Navbar.vue';
<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import EditModal from '@/components/EditModal.vue'
import { api } from '@/api'
// import { useRouter } from 'vue-router'

const sponsors = ref()
const totalSponsors = ref()
const fetchData = async (id) => {
  try {
    const response = await api.get(`/sponsor-detail/${id}/`);
    sponsors.value = response.data.results
    totalSponsors.value = response.data.count
    console.log(response)
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

fetchData(1)
const isModal = ref(false)

const closeModal = () => {
  isModal.value = false
}
</script>
<template>
  <div :class="isModal ? 'overflow-hidden h-screen fixed top-0 left-0 w-full' : ''">
    <edit-modal v-if="isModal" @closeModal="closeModal" />
    <Navbar />

    <div class=" bg-white py-6">
      <div class="container">
        <div class="flex gap-3 items-center">
          <router-link to="/sponsors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M22.1663 14H5.83301" stroke="black" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M13.9997 22.1667L5.83301 14L13.9997 5.83334" stroke="black" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </router-link>
          <h1 class="text-xl font-bold">Ishmuhammedov Aziz Ishqobilovich</h1>

          <span class="bg-[#DDFFF2] rounded py-1.5 px-3 text-xs font-rubik text-[#00CF83]">Tasdiqlangan</span>
        </div>

      </div>
    </div>

    <div class="mt-10 w-[750px] mx-auto rounded-md bg-white p-5">

      <div class=" flex justify-between items-center">
        <h1>Homiy haqida</h1>

        <button @click="isModal = true"
          class="flex items-center gap-1 py-2 px-5 bg-[#EDF1FD] text-primary font-rubik font-medium rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_40_3970)">
              <path
                d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
                stroke="#3365FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M9 15H12L20.5 6.5C20.8978 6.10217 21.1213 5.56261 21.1213 5C21.1213 4.43739 20.8978 3.89782 20.5 3.5C20.1022 3.10217 19.5626 2.87868 19 2.87868C18.4374 2.87868 17.8978 3.10217 17.5 3.5L9 12V15Z"
                stroke="#3365FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 5L19 8" stroke="#3365FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_40_3970">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Tahrirlash
        </button>
      </div>


      <div class="my-7 flex items-center gap-5">

        <span class="bg-[#EAECF0] border border-[#E0E7FF] p-3 rounded-md"><svg xmlns="http://www.w3.org/2000/svg"
            width="28" height="32" viewBox="0 0 28 32" fill="none">
            <g clip-path="url(#clip0_26_187)">
              <path opacity="0.4"
                d="M11.9594 25.9231L13 21.5L11 18H17L15 21.5L16.0406 25.9231L14 30L11.9594 25.9231ZM14 16C15.5823 16 17.129 15.5308 18.4446 14.6518C19.7602 13.7727 20.7855 12.5233 21.391 11.0615C21.9965 9.59966 22.155 7.99113 21.8463 6.43928C21.5376 4.88743 20.7757 3.46197 19.6569 2.34315C18.538 1.22433 17.1126 0.462403 15.5607 0.153721C14.0089 -0.15496 12.4003 0.00346625 10.9385 0.608967C9.47672 1.21447 8.22729 2.23985 7.34824 3.55544C6.46919 4.87104 6 6.41775 6 8C6 10.1217 6.84285 12.1566 8.34315 13.6569C9.84344 15.1572 11.8783 16 14 16Z"
                fill="#2E5BFF" />
              <path
                d="M19.9875 18.0376L14 30.0001L8.0125 18.0376C3.55625 18.2501 0 21.8938 0 26.4001V29.0001C0 29.7957 0.31607 30.5588 0.87868 31.1214C1.44129 31.684 2.20435 32.0001 3 32.0001H25C25.7956 32.0001 26.5587 31.684 27.1213 31.1214C27.6839 30.5588 28 29.7957 28 29.0001V26.4001C28 21.8938 24.4437 18.2501 19.9875 18.0376Z"
                fill="#2E5BFF" />
            </g>
            <defs>
              <clipPath id="clip0_26_187">
                <rect width="28" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg></span>

        <h2 class="max-w-[160px] font-rubik font-medium">
          Ishmuhammedov Aziz Ishqobilovich
        </h2>

      </div>


      <div class="grid grid-cols-2 gap-6 w-[80%]">
        <div>
          <p class="mb-3 uppercase text-[#B5B5C3] font-rubik text-xs font-medium">telefon raqam</p>
          <h1 class="uppercase text-[#212121] font-rubik  font-medium">+998 99 973-72-60</h1>
        </div>
        <div>
          <p class="mb-3 uppercase text-[#B5B5C3] font-rubik text-xs font-medium">Homiylik summasi</p>
          <h1 class="uppercase text-[#212121] font-rubik  font-medium">30 000 000 UZS</h1>
        </div>
        <div>
          <p class="mb-3 uppercase text-[#B5B5C3] font-rubik text-xs font-medium">Homiylik summasi</p>
          <h1 class="uppercase text-[#212121] font-rubik  font-medium">30 000 000 UZS</h1>
        </div>
      </div>


    </div>

    <img class="absolute left-1/2  -translate-x-1/2" src="/bottom-image.png" alt="">

  </div>
</template>