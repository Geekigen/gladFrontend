<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary m-8">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Stima</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About,</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact us </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Deparments</a>
            </li>
          </ul>
          <button v-if="isLoggedIn" class="btn btn-secondary m-2" @click="logout"
            type="button">Logout</button>
          <button v-if="!isLoggedIn" class="btn btn-secondary m-2" onclick="window.location.href='/register'"
            type="button">Register</button>
          <button v-if="!isLoggedIn" class="btn btn-primary" onclick="window.location.href='/login'" type="button">Login</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { authStore } from '~/store';

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: authStore().isLoggedIn,
      role: authStore().getUser.role
    }
  },
  methods: {
    async logout() {
      authStore().logout()
      await navigateTo('/')
    },
  },
  watch: {
    $route(to, from){
      this.isLoggedIn = authStore().isLoggedIn,
      this.role = authStore().getUser.role
    }
  }
}

</script>
