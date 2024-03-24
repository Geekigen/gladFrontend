<template>
    <div>
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
                    <th>Actions</th> <!-- Added Actions column -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in customers" :key="user.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.id }}</td> <!-- user.id is the unique identifier -->
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.contact_no }}</td>
                    <td>{{ user.status }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <div class="edit">
                                <button type="button" class="btn btn-sm btn-success view-item-btn"
                                    data-bs-toggle="modal" data-bs-target="#addAgentModal" @click="editCustomer(user)">
                                    Edit <!-- Changed button text -->
                                </button>
                            </div>
                            <div class="view">
                                <button type="button" class="btn btn-sm btn-info view-item-btn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" @click="viewCustomer(user)">
                                    View <!-- Changed button text -->
                                </button>
                            </div>
                            <div class="remove">
                                <button type="button" class="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal" @click="deleteCustomer(user)"
                                    data-bs-target="#confirmDeleteModal">
                                    Delete <!-- Changed button text -->
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
        return{

            customers:[]

        }
        

    },

    methods:{
        async get_customers(){
            try {
          const response = await fetch('http://127.0.0.1:8000/customers/get_all/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': '*',
              
            },
            
          });

          console.log(response)
  
          if (response) {
            this.success = responseData.message;
            this.customers=response.data;

          } else {
            this.success = "Registration failed. Please try again.";
          }
        } catch (error) {
          console.error("Error:", error);
          this.success = "An error occurred. Please try again later.";
        }
        }
    },
    created(){
        this.get_customers();
    }
    
    }

</script>

