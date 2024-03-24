<template>
    <div class="w-100 bg-info d-flex align-items-center justify-content-center m-4 min-vh-100">
      <div>
        <label for="firstNameInput" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstNameInput" v-model="first_name">
        <label for="lastNameInput" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastNameInput" v-model="last_name">
        <label for="idNoInput" class="form-label">ID Number</label>
        <input type="text" class="form-control" id="idNoInput" v-model="id_no">
        <label for="phoneNoInput" class="form-label">Phone Number</label>
        <input type="text" class="form-control" id="phoneNoInput" v-model="phone_no">
        <label for="addressInput" class="form-label">Address</label>
        <input type="text" class="form-control" id="addressInput" v-model="address">
        <label for="emailInput" class="form-label">Email Address</label>
        <input type="email" class="form-control form-control-icon" id="emailInput" placeholder="example@gmail.com" v-model="email">
        <i class="ri-mail-unread-line"></i>
        <label for="passwordInput" class="form-label">Password</label>
        <input type="password" class="form-control" id="passwordInput" v-model="password">
        <div id="passwordHelpBlock" class="form-text">
          Must be 8-20 characters long.
        </div>
        <button type="button" class="btn btn-primary" @click="register">Register</button>
        <div v-if="success" class="alert alert-success mt-3" role="alert">
          {{ success }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        id_no: "",
        password: "",
        success: "",
        first_name: "",
        last_name: "",
        address: "",
        phone_no: "",
        email: ""
      };
    },
    methods: {
      async register() {
        try {
          const response = await fetch('http://127.0.0.1:8000/customers/create/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              phone_no: this.phone_no,
              first_name: this.first_name,
              last_name: this.last_name,
              address: this.address
            })
          });
  
          const responseData = await response.json();
  
          if (response.ok) {
            this.success = responseData.message;
          } else {
            this.success = "Registration failed. Please try again.";
          }
        } catch (error) {
          console.error("Error:", error);
          this.success = "An error occurred. Please try again later.";
        }
      }
    }
  }
  </script>
  