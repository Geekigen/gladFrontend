<template>
  <div class="container m-4">
    <div class="text-end">
      <button
        class="btn btn-primary waves-effect waves-light"
        data-bs-toggle="modal"
        data-bs-target="#addApartmentModal"
      >
        <i class="ri-add-line align-bottom me-1 bx bx-plus fs-4"></i> Add Bill
      </button>
      <button
        class="btn btn-primary waves-effect waves-light m-2"
        data-bs-toggle="modal"
        data-bs-target="#addMeterModal"
      >
        <i class="ri-add-line align-bottom me-1 bx bx-plus fs-4"></i> Add Meter
      </button>
    </div>
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

    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Email</th>
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
          <td>{{ user.id }}</td>
          <!-- user.id is the unique identifier -->
          <td>{{ user.last_name }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.contact_no }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.role }}</td>
          <td>
            <div class="d-flex gap-2">
              <div class="edit">
                <button
                  type="button"
                  class="btn btn-sm btn-success view-item-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#addAgentModal"
                  @click="editCustomer(user)"
                >
                  Edit
                  <!-- Changed button text -->
                </button>
              </div>
              <div class="view">
                <button
                  type="button"
                  class="btn btn-sm btn-info view-item-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="viewCustomer(user)"
                >
                  View
                  <!-- Changed button text -->
                </button>
              </div>
              <div class="remove">
                <button
                  type="button"
                  class="btn btn-sm btn-danger remove-item-btn"
                  data-bs-toggle="modal"
                  @click="deleteCustomer(user)"
                  data-bs-target="#confirmDeleteModal"
                >
                  Delete
                  <!-- Changed button text -->
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
      success: null,
      error: null,
      id_no: null,
      current_reading: null,
      previous_reading: null,
      due_date: null,
      payment_method: null,
      id_no: null,
      meter_no: null,
      bill: null,
      meter: null,
      first_name: null,
      last_name: null,
      email: null,
      phone_number: null,
      id: null,
      to_update: false,
      customer_meter: null,
      customer_bill: null,
    };
  },

  methods: {
    async get_customers() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/customers/get_all/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.code == "200") {
          this.success = responseData.message;
          this.customers = response.data;
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async create_bill() {
      try {
        const response = await fetch("http://127.0.0.1:8000/bill/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
          body: JSON.stringify({
            id_no: this.id_no,
            current_reading: this.current_reading,
            previous_reading: this.previous_reading,
            due_date: this.due_date,
            payment_method: this.payment_method,
          }),
        });
        if (response.code == "201") {
          this.success = response.message;
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async add_meter() {
      try {
        const response = await fetch("http://127.0.0.1:8000/meter/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_no: this.id_no,
          }),
        });
        if (response.code == "201") {
          this.success = response.message;
        }
      } catch (error) {
        this.error = "An error occurred. Please try again later.";
      }
    },
    async read_meter() {
      try {
        const response = await fetch("http://127.0.0.1:8000/meter/read/", {
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
      this.phone_number = i.phone_number;
      this.id = i.id;
      this.to_update = true;
    },
  },
  created() {
    this.get_customers();
  },
};
</script>
