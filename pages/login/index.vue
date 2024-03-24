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
          v-model="username">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>
      <a href="/forgot">Forgot password</a>
      <div class="text-end">
        <button type="submit" class="btn btn-success" @click="login">Login</button>

      </div>
      
      <p class="text-center">Don't have an account? <a href="/register/">Register</a></p>
    </form>
  </div>
</template>

<script>
definePageMeta({
  layout: false
});

export default { 
  data(){
    return {
    password: "",
    success: "",
    error: "",
    username: ""
    };


  },
  methods: {
    async login() {
      try {

        const response = await $fetch('http://127.0.0.1:8000/customers/create/', {
          method: 'POST',
          body: {
            username: this.username,
            password: this.password
          }
        });

        if (response.code === '200') {
          this.success = response.message;
        }


      } catch (e) {
        this.error = "An error occurred. Please try again later.";

      }
    },

  }
}
</script>