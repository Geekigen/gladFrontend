export const authStore = defineStore({
    id: "authStore",
    state: () => {
        return{
            user: {},
            token:"",
            loggedIn: false
        }
    },
    actions:{
        setUser(user){
            this.user = user
        },
        setToken(token){
            this.token = token
        },
        login(){
            this.loggedIn = true
        },
        logout(){
            this.loggedIn = false
            this.user = {}
            this.permissions = []
            this.token = ""
            // navigateTo(`/`)
        }
    },

    getters:{
        getUser:(state)=>{
            return state.user
        },
        getToken:(state)=>{
            return state.token
        },
        isLoggedIn:(state)=>{
            return state.loggedIn
        }

    },

    persist:true

})

/// changes are detected
if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(authStore, import.meta.hot))
}