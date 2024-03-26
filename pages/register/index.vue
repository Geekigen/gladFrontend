<template>
  <div class="w-100 bg-info d-flex align-items-center justify-content-center m-4 min-vh-100">

    <div class="container">
      <div v-if="success" class="alert alert-success mt-3" role="alert">
        {{ success }}
      </div>

      <div v-if="error" class="alert alert-danger mt-3" role="alert">
        {{ error }}
      </div>
      <form @click.prevent="register">
        <h1 class="text-center">Register</h1>
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="firstNameInput" class="form-label">User Name</label>
              <input type="text" class="form-control" id="firstNameInput" v-model="form.username">
            </div>
            <div class="mb-3">
              <label for="firstNameInput" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstNameInput" v-model="form.first_name">
            </div>
            <div class="mb-3">
              <label for="lastNameInput" class="form-label ">Last Name</label>
              <input type="text" class="form-control" id="lastNameInput" v-model="form.last_name">
            </div>

            <div class="mb-3">
              <label for="idNoInput" class="form-label">ID Number</label>
              <input type="text" class="form-control" id="idNoInput" v-model="form.id_no">
            </div>
            <div class="mb-3">
              <label for="contactNoInput" class="form-label">Phone Number</label>
              <input type="text" class="form-control" id="contactNoInput" v-model="form.contact_no">
            </div>
            <div class="mb-3">
              <label for="addressInput" class="form-label ">Address</label>
              <input type="text" class="form-control" id="addressInput" v-model="form.address">
            </div>

          </div>
          <div class="col-6">


            <div class="mb-3">
              <label for="passwordInput" class="form-label">Password</label>
              <input type="password" class="form-control form-control-icon" id="passwordInput" placeholder="Password"
                v-model="form.password">
              <i class="ri-lock-line"></i>
            </div>
            <div class="mb-3">
              <label for="passwordInput" class="form-label">Confirm Password</label>
              <input type="password" class="form-control form-control-icon" id="c_passwordInput" placeholder="Password"
                v-model="c_password">
              <i class="ri-lock-line"></i>
            </div>

            <div class="mb-3">
              <label for="roleInput" class="form-label">Role</label>
              <select class="form-select" id="roleInput" v-model="form.role">
                <option selected>Choose...</option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div class="mb-3 text-end">
              <button type="button m-4 " class="btn btn-primary" @click="register">Register</button>
            </div>
            <p class="text-center">Already have an account? <a href="/login">Login</a></p>

          </div>

        </div>


      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      success: "",
      c_password: "",
      form: {
        id_no: '',
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        contact_no: '',
        role: '',
        status: 'Active',
        password: ''
      }
    };
  },
  methods: {
    async register() {
      if (this.password !== this.c_password) {
        this.error = "Passwords do not match. Please try again.";
        return;
      }
      try {
        const response = await $fetch(`${this.$config.public.apiUrl}/customers/create/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: "cors",
          credentials: "include",
          body: {
            id_no: this.form.id_no,
            email: this.form.email,
            username: this.form.email,
            password: this.form.password,
            contact_no: this.form.contact_no,
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            address: this.form.address,
            role: this.form.role
          }
        })
        console.log(response)
        if (response.code === '201') {
          this.success = response.message;
          this.error = "";

        }
        else {
          this.error = response.message;
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    }
  }
}
</script>