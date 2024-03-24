<template>
    <div>
        <div class="card"> 

        </div>
        <div class="sidebar">

            <ul class="nav-list">

                <li>
                    <a href="/home">
                        <i class="bx bx-grid-alt">Dashboard</i>

                    </a>

                </li>
                <li>
                    <a href="/Billing">
                        <i class="bx bx-dollar">Bills</i>
                        <span class="links_name">Billing</span>
                    </a>
                    <span class="tooltip">Billing</span>
                </li>
                <li>
                    <a href="/payments">
                        <i class="bx bx-wallet">Transactions</i>
                        <span class="links_name">Transactions</span>
                    </a>
                    <span class="tooltip">Transactions</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-chat">Complaints</i>
                        <span class="links_name">Complaints</span>
                    </a>
                    <span class="tooltip">Complaints</span>
                </li>

                <li>
                    <a href="/auth/profile">
                        <i class="bx bx-dots-vertical">Settings</i>
                        <span class="links_name">settings</span>
                    </a>
                    <span class="tooltip">settings</span>
                </li>
                <li>
                    <a href="/help">
                        <i class="bx bx-help-circle">Help</i>
                        <span class="links_name">Help & Support</span>
                    </a>
                    <span class="tooltip">Help & Support</span>
                </li>

                <li>
                    <a href="">
                        <i class="bx bx-user">Admin</i>
                        <span class="links_name">Admin</span>
                    </a>
                    <span class="tooltip">Admin</span>
                </li>
                <li class="profile">
                    <div class="profile-details">
                        <div class="name_job">
                            <div class="name">HELLO</div>
                            <div class="job">Welcome</div>
                        </div>
                        <button @click="logout">
                            <i class="bx bx-log-out" id="log_out"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle rounded-circle p-2" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false" style="font-size: 24px">
                    <i class="bx bx-user"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/auth/profile">user</a>User</li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="/help">Help & Support</a></li>
                    <li>
                        <button class="dropdown-item" @click="logout">Logout</button>
                    </li>
                </ul>
            </li>
        </ul>

    </div>



</template>

<script>
// import { useAuthStore } from "~/stores/auth";

export default {
    // data() {
    // return {
    // user: useAuthStore().user,
    // logout: useAuthStore().logout,
    // };
    // },
    methods: {
        toggleSidebar() {
            // const sidebar = document.querySelector(".sidebar");
            // const closeBtn = document.querySelector("#btn");

            // Toggle the sidebar class
            sidebar.classList.toggle("open");

            // Change the menu button icon based on sidebar class
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-x"); // Replace the icon class
            } else {
                closeBtn.classList.replace("bx-x", "bx-menu"); // Replace the icon class
            }
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 250px;
    background: black;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;
}

.sidebar.open {
    width: 250px;
}

.sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}

.sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
    color: blac;
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
    opacity: 1;
}

.sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
    text-align: right;
}

.sidebar i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 80px;
}

.sidebar .nav-list {
    margin-top: 20px;
    height: 100%;
}

.sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
}

.sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: black;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 12px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
}

/* .sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
} */

.sidebar.open li .tooltip {
    display: none;
}

.sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: black;
}

.sidebar li a:hover {
    background: #FFF;
}

.sidebar li a .links_name {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
}

.sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
    transition: all 0.5s ease;
    color: #11101D;
}

.sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
}

.sidebar li.profile {
    position: fixed;
    height: 60px;
    width: 78px;
    left: 0;
    bottom: -8px;
    padding: 10px 14px;
    background: blue;
    transition: all 0.5s ease;
    overflow: hidden;
}

.sidebar.open li.profile {
    width: 250px;
}

.sidebar li .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.sidebar li img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
}

.sidebar li.profile .name,
.sidebar li.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
}

.sidebar li.profile .job {
    font-size: 12px;
}

.sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: blue;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
    width: 50px;
    background: none;
}

@media (max-width: 420px) {
    .sidebar li .tooltip {
        display: none;
    }
}

.content {
    transition: margin-left 0.5s ease;
    /* Add transition for smooth adjustment */
    margin-left: 100px;
    /* Set initial margin-left to match initial width of the sidebar */
}

.sidebar.open+.content {
    margin-left: 250px;
    /* Adjust margin-left when sidebar is open */
}

.fixed-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.required {
    color: red;
    margin-left: 5px;
}

.btn-hover:hover {
    transition: color 0.3s ease;
    color: #f8f9fa;
}
.header {
    color: black
}
</style>



