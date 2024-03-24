<template>
  <div class=" w-100 bg-info d-flex align-items-center justify-content-center m-4 min-vh-100">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ID No</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="id_number">
        <div id="emailHelp" class="form-text">We'll never share your information with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
          data-bs-toggle="dropdown" aria-expanded="false">
          Status
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Active</a></li>
          <li><a class="dropdown-item" href="#">Inactive</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
          data-bs-toggle="dropdown" aria-expanded="false">
          Role
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Admin</a></li>
          <li><a class="dropdown-item" href="#">Client</a></li>
        </ul>
      </div>
      <button type="submit" class="btn btn-success" @click="login">Submit</button>
    </form>
  </div>
</template>

<script>
definePageMeta({
  layout: false
});

export default {
  data: {
    id_number: "",
    password: "",
    success: ""


  },
  methods: {
    async login() {
      try {

        const response = await $fetch('http://127.0.0.1:8000/customers/create/', {
          method: 'POST',
          body: {
            email: this.email,
            password: this.password
          }
        });

        if (response.status === 200) {
          this.success = response.message;
        }


      } catch (e) {

      }
    },

  }
}
</script>