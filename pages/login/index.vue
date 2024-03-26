<template>
  <div class=" w-100 bg-info d-flex align-items-center justify-content-center m-4 min-vh-100">
    <form @click.prevent="login">
      <h1 class="text-center">Login</h1>
      <div v-if="error" class="alert alert-danger mt-3" role="alert">
        {{ error }}
      </div>
      
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="form.username">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
      </div>
      <a href="/forgot">Forgot password</a>
      <div class="text-end">
        <button type="button" class="btn btn-success" @click="handleSubmit">Login</button>

      </div>
      
      <p class="text-center">Don't have an account? <a href="/register/">Register</a></p>
    </form>
  </div>
</template>

<script>

import { storeToRefs } from 'pinia'
import { authStore } from '~/store';

export default {
    name: 'Login',
    data() {
        return {
            error: "",
            form: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        async handleSubmit() {
            try {
              console.log([this.form.username,this.form.password])
              const response = await $fetch(`${this.$config.public.apiUrl}/login/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: "cors",
                    credentials: "include",
                    body: {
                        username: this.form.username,
                        password: this.form.password,
                    }
                });

                if (response.code == "200") {
                  console.log("logged in")
                  const store = authStore()
                  store.setUser(response.user)
                  store.setToken(response.token)
                  store.login()
                  return await navigateTo(`/home`)
               }

            } catch (error) {
                this.error = "Connection error"
            }
        }
    },
    created() {
        const store = authStore()
        store.logout()
    }
}
</script>