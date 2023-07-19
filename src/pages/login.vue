<script setup >
// import { useGetUserInfo, useMSCookie } from '../composables/auth';

definePageMeta({ layout: false })

// const { $api, $loginApi } = useNuxtApp();
// const { $toast } = useNuxtApp()
// const credentials = reactive({ username: '', password: '' });
// const visiblePassword = ref(false)
// const loading = ref(false)

// async function login() {
//   loading.value = true
//   await $api.post('/auth/login', credentials)
//     .then(async (response) => {
//       loading.value = false
//       useMSCookie().value = response.data.access

//       await nextTick()
//       const { userInfo } = await useGetUserInfo()

//       if (response.data.access !== null || response.data.access !== '') {
//         navigateTo('/')
//       }

//       $toast.remove()
//       $toast.success(`Seja Bem Vindo(a) ${userInfo.value.first_name}!`)
//     })
//     .catch((reason) => {
//       loading.value = false
//       const errorDescription = reason.response.data.detail.error_description
//       if (errorDescription == 'Invalid user credentials') {
//         $toast.error('Usuário ou senha inválidos')
//       }
//       else {
//         $toast.error(JSON.stringify(reason.response.data.detail))
//       }
//     })
// }
</script>

<template>
  <main class="flex justify-center items-center overflow-x-hidden h-screen overflow-y-hidden  w-screen">
    <div class="container py-20">

      <div class="w-3/3 flex justify-center  m-auto">
        <h1 class="text-4xl lg:text-5xl">scan and eat</h1>
      </div>

      <form class="w-3/3 px-5 mt-5 max-w-xl m-auto" autocomplete="off">
        <!-- Input Login -->
        <div class="grid mb-6 md:grid-cols-1">
          <label for="login" class="block mb-2 text-sm font-medium text-gray-900 ">
            Login
          </label>
          <GlobalInput class="text-gray-900" id="login" />
        </div>

        <!-- Input Senha -->
        <div class="grid mb-6 md:grid-cols-1">
          <label for="password" class="text-sm mb-2 font-medium text-gray-900">
            Senha
          </label>

          <div class="flex justify-end items-center">
            <GlobalInput id="password" />

            <GlobalButton class="absolute mx-2" type="default">
              <Icon name="teenyicons:eye-outline" />
            </GlobalButton>

            <!-- <GlobalButton class="absolute  mx-2" type="default">
              <Icon name="teenyicons:eye-closed-solid" />
            </GlobalButton> -->
          </div>
        </div>

        <!-- Botão de Acessar -->
        <navigateTo @click="navigateTo('home')">
          <button class="py-2  bg-black text-white font-semibold rounded-lg shadow-md focus:outline-none 
                                focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 w-full
                              ">
            <div>
              Acessar
              <Icon name="material-symbols:login-rounded" />
            </div>
          </button>
        </navigateTo>

        <!-- <div class="text-msGray300 text-sm mt-5 ">Versão 1.0.0</div> -->
      </form>
    </div>
  </main>
</template>


