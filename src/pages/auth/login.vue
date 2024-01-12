<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import { useRouter } from 'vue-router'
import { api } from '../../api'

interface User {
  username: string;
  password: string;
}

const router = useRouter()

const formData = ref<User>({
  username: "",
  password: "",
});
const errorMessage = ref('');


const login = async () => {
  try {
    const response = await api.post('/auth/login/', formData.value);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.access)
      router.push('/')
    } else {
      errorMessage.value = 'Invalid credentials. Please try again.';
    }
  } catch (error) {
    errorMessage.value = 'Login yoki parol xato';
  }
};

</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <img class="mb-12" src="/metsenat-logo.png" alt="metsenat logo">
    <div class="w-[380px]">

      <div class="bg-white rounded-lg p-8">
        <h1 class="mb-10 font-bold text-2xl text-[#28293D]">Kirish</h1>
        <form @submit.prevent="login" class="flex flex-col gap-6">
          <div>
            <h2 class="text-xs font-medium uppercase mb-2">Login </h2>
            <BaseInput placeholder="FISH" v-model="formData.username" type="text" />
          </div>
          <div>
            <h2 class="text-xs font-medium uppercase mb-2">PAROL </h2>
            <BaseInput placeholder="••••••••••" type="password" v-model="formData.password" />
          </div>
          <div>
            <!-- <Checkbox /> -->
          </div>
          <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
          <div>
            <button class="bg-primary px-4 py-3 text-white rounded w-full">Kirish</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

