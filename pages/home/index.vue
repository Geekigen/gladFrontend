<template>
  <div class="m-4">
    <div
      class="modal fade"
      id="addMeterModal"
      tabindex="-1"
      aria-labelledby="addMeterModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addMeterModal">Add Bill</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="create_bill">
              <div class="mb-3">
                <label for="room_number" class="form-label"
                  >Current Reading<span class="required">*</span></label
                >
                <input
                  type="number"
                  class="form-control"
                  v-model="current_reading"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="reading" class="form-label"
                  >Previous Reading<span class="required">*</span></label
                >
                <input
                  type="number"
                  class="form-control"
                  v-model="previous_reading"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputdate" class="form-label"
                  >Due Date<span class="required">*</span></label
                >
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputdate"
                  v-model="due_date"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="house_type" class="form-label"
                  >Payment method<span class="required">*</span></label
                >
                <select
                  class="form-select"
                  id="payment_method"
                  v-model="payment_method"
                  required
                >
                  <option value="" selected disabled>
                    Select Payment Method
                  </option>
                  <option value="M-PESA">M-PESA</option>
                  <option value="BANK">BANK</option>
                  <option value="CASH">CASH</option>
                </select>
              </div>
              <button
                type="submit"
                class="btn btn-primary waves-effect waves-light"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      aria-labelledby="editModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModal">Edit Customer</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="firstNameInput" class="form-label">Username</label>
              <input type="text" class="form-control" id="firstNameInput" v-model="username">
            </div>
            
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
            

          </div>
          <div class="col-6">
            <div class="mb-3">
              <label for="contactNoInput" class="form-label">Phone Number</label>
              <input type="text" class="form-control" id="contactNoInput" v-model="phone_number">
            </div>
            <div class="mb-3">
              <label for="addressInput" class="form-label ">Address</label>
              <input type="text" class="form-control" id="addressInput" v-model="address">
            </div>

            <div class="mb-3">
              <label for="roleInput" class="form-label">Role</label>
              <select class="form-select" id="roleInput" v-model="c_role">
                <option selected disabled>Choose...</option>
                <option value="customer">Customer</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="roleInput" class="form-label">Status</label>
              <select class="form-select" id="roleInput" v-model="status">
                <option selected disabled>Choose...</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

          </div>

        </div>


      </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success" @click="edit_customer">
              update
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Confirm Meter creation for Customer {{ id_no }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="add_meter">
              Confirm changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete modal start -->
    <div
      class="modal fade"
      id="customerDeleteModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Confirm you want to delete customer {{ id_no }}?
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-danger" @click="delete_customer">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete modal end -->
<!-- modals -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Contact No</th>
          <th>Status</th>
          <th>Role</th>
          <th>Actions</th>
          <!-- Added Actions column -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in customers" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.id_no }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.contact_no }}</td>
          <td>{{ user.status__name }}</td>
          <td>{{ user.role__name }}</td>
          <td>
            <div class="dropdown">
              <a
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
                  />
                </svg>
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <button class="dropdown-item">
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4b86fb"
                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" 
                  
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  @click="view_customer(user)"
                  >
                    Edit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#84f575"
                        d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button 
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#customerDeleteModal"
                  @click="view_customer(user)"
                  
                  >
                  
                    Delete
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f10909"
                        d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    @click="view_customer(user)"
                  >
                    Add Meter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4b86fb"
                        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#addMeterModal"
                    @click="view_customer(user)"
                  >
                    Add Bill
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4b86fb"
                        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item">
                    Read Meter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4b86fb"
                        d="M21.59 11.59L23 13l-9.5 9.5l-5.08-5.09L9.83 16l3.67 3.68zM4 16V3h5a4 4 0 0 1 4 4c0 1.54-.87 2.88-2.15 3.55L14 16h-2l-2.89-5H6v5zm2-7h3a2 2 0 0 0 2-2a2 2 0 0 0-2-2H6z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { authStore } from "~/store";
export default {
  data() {
    return {
      isLoggedIn: authStore().isLoggedIn,
      role: authStore().getUser.role,
      token: authStore().getToken,
      customers: [],
      success: null,
      address:null,
      error: null,
      id_no: null,
      current_reading: null,
      previous_reading: null,
      due_date: null,
      payment_method: null,
      meter_no: null,
      bill: null,
      meter: null,
      first_name: null,
      last_name: null,
      email: null,
      phone_number: null,
      username:null,
      status:null,
      id: null,
      c_role:null,
      to_update: false,
      customer_meter: null,
      customer_bill: null,
    };
  },

  methods: {
    async get_customers() {
      try {
        const response = await $fetch(
          "http://127.0.0.1:8000/customers/get_all/",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },
            body: {
              token: this.token,
            },
          }
        );
        if (response.code == "200") {
          this.customers = response.data;
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async create_bill() {
      try {
        const response = await $fetch("http://127.0.0.1:8000/bill/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_no: this.id_no,
            current_reading: this.current_reading,
            previous_reading: this.previous_reading,
            due_date: this.due_date,
            payment_method: this.payment_method,
            token: this.token,
          }),
        });
        console.log(response);
        if (response.code == "201") {
          this.success = response.message;
          this.$router.go()
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async add_meter() {
      try {
        const response = await $fetch("http://127.0.0.1:8000/meter/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_no: this.id_no,
            token: this.token,
          }),
        });
        if (response.code == "201") {
          this.success = response.message;
          this.$router.go()
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    //  
    async delete_customer() {
      try {
        const response = await $fetch("http://127.0.0.1:8000/customers/delete/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_no: this.id_no,
            token: this.token,
          }),
        });
        if (response.code == "200") {
          this.success = response.message;
          this.$router.go()
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async edit_customer() {
      try {
        const response = await $fetch("http://127.0.0.1:8000/customers/update/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_no: this.id_no,
            status: this.status,
            contact_no: this.phone_number,
            first_name: this.first_name,
            last_name: this.last_name,
            address: this.address,
            role: this.role,

            token: this.token,
          }),
        });
        console.log(response)
        if (response.code == "200") {
          this.success = response.message;
          this.$router.go()
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async read_meter() {
      try {
        const response = await $fetch("http://127.0.0.1:8000/meter/read/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            meter_no: this.meter_no,
          }),
        });
        if (response.code == "200") {
          this.success = response.message;
          this.meter = response.data;
          this.$router.go()
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },

    async read_bill() {
      try {
        const response = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            meter_no: this.meter_no,
          }),
        });
        if (response.code == "200") {
          this.success = response.message;
          this.bill = response.data;
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },

    view_customer(i) {
      this.first_name = i.first_name;
      this.last_name = i.last_name;
      this.email = i.email;
      this.status=i.status__name;
      this.username=i.username;
      this.phone_number = i.contact_no;
      this.id = i.id;
      this.address=i.address;
      this.id_no = i.id_no;
      this.to_update = true;
      this.c_role=i.role__name
    },
  },
  created() {
    this.get_customers();
  },
};
</script>
