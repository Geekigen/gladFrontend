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
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">About,</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact us </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Deparments</a>
            </li> -->
          </ul>
          <button v-if="isLoggedIn" class="btn btn-secondary m-2" @click="logout" type="button">Logout
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" stroke="#e41111" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                <path d="M9 12h12l-3-3m0 6l3-3" />
              </g>
            </svg>
          </button>
          <button v-if="role == 'Admin'" class="btn btn-info m-2" onclick="window.location.href='/register'"
            type="button">Register customers
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4" />
            </svg>
          </button>
          <button v-if="!isLoggedIn" class="btn btn-primary" onclick="window.location.href='/login'"
            type="button">Login</button>
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
      role: authStore().getUser.role,

    }
  },
  methods: {
    async logout() {
      authStore().logout()
      await navigateTo('/')
    },
  },
  watch: {
    $route(to, from) {
      this.isLoggedIn = authStore().isLoggedIn,
        this.role = authStore().getUser.role
    }
  }
}

</script>
