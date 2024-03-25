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
            <label for="firstNameInput" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstNameInput" v-model="first_name">
          </div>
          <div class="mb-3">
            <label for="lastNameInput" class="form-label ">Last Name</label>
            <input type="text" class="form-control" id="lastNameInput" v-model="last_name">
          </div>
       
  
     
        <div class="mb-3">
          <label for="idNoInput" class="form-label">ID Number</label>
          <input type="text" class="form-control" id="idNoInput" v-model="id_no">
        </div>
        <div class="mb-3">
          <label for="contactNoInput" class="form-label">Phone Number</label>
          <input type="text" class="form-control" id="contactNoInput" v-model="contact_no">
        </div>
        <div class="mb-3">
          <label for="addressInput" class="form-label ">Address</label>
          <input type="text" class="form-control" id="addressInput" v-model="address">
        </div>

            </div>
            <div class="col-6">
             
        <div class="mb-3">
        <label for="emailInput" class="form-label">Email Address</label>
        <input type="email" class="form-control form-control-icon" id="emailInput" placeholder="example@gmail.com" v-model="email">
        <i class="ri-mail-unread-line"></i>
        </div>
        
       <div class="mb-3">
        <label for="passwordInput" class="form-label">Password</label>
        <input type="password" class="form-control form-control-icon" id="passwordInput" placeholder="Password" v-model="password">
        <i class="ri-lock-line"></i>
       </div>
       <div class="mb-3">
        <label for="passwordInput" class="form-label">Confirm Password</label>
        <input type="password" class="form-control form-control-icon" id="c_passwordInput" placeholder="Password" v-model="c_password">
        <i class="ri-lock-line"></i>
       </div>
       
       <div class="mb-3">
        <label for="roleInput" class="form-label">Role</label>
        <select class="form-select" id="roleInput" v-model="role">
          <option selected>Choose...</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="mb-3 text-end">
        <button type="button m-4 " class="btn btn-primary" @click="register">Register</button>
        </div>  
      
        

        <p class="text-center">Already have an account? <a href="/login/">Login</a></p>

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
        id_no: "",
        password: "",
        success: "",
        error: "",
        first_name: "",
        last_name: "",
        address: "",
        contact_no: "",
        c_password: "",
        email: "",
        role: ""

      };
    },
    methods: {
      async register() {
         if (this.password !== this.c_password) {
          this.error = "Passwords do not match. Please try again.";
          return;
        }
        try {
          const response = await fetch('http://127.0.0.1:8000/customers/create/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id_no: this.id_no,
              email: this.email,
              username: this.email,
              password: this.password,
              contact_no: this.contact_no,
              first_name: this.first_name,
              last_name: this.last_name,
              address: this.address,
              role: this.role
            })
          })
  
          if (response.code === '201') {
            this.success = response.message;
            this.error = "";

          } 
        } catch (error) {
          this.error = "An error occurred. Please try again later.";
        }
      }
    }
  }
  </script>
  