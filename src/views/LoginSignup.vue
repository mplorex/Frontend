<template>
    <div class="login" id="login">
        <div v-if="showLogin" class="logForm">
            <Login :user-login="userLogin"></Login>
            <button @click="showLogin">Login</button>
        </div>
        <div v-else class="logForm">
            <Signup :user-signup="userSignup"></Signup>
            <button @click="showLogin">Signup</button>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue'

export default {
    name: 'App',
    components:{
        Login,
        Signup
    },
    data: () => ({
        showLogin: true
    }),
    methods: {
        userLogin () {
            this.$router.push('/')
        },
        userSignup () {
            this.showLogin = true
        },
        login() {
                if(this.input.email != "" && this.input.password != "") {
                    if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
                    } else {
                        console.log("Email/Pasword incorrect")
                    }
                } else {
                    console.log("Please type email/password")
                }
            }
        },
        signup() {
                if(this.input.email != "" && this.input.password != "" && this.input.fullName != "") {
                    if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password && this.input.fullName == this.$parent.mockAccount.fullName) {
                    } else {
                        console.log("Email/Pasword incorrect")
                    }
                } else {
                    console.log("Please type email/password")
                }
            },
        createUser () {
            this.users.unshift({
            email: this.email,
            password: this.password,
            fullName: this.fullName,
        })
            this.email = ''
            this.password = ''
            this.fullName = ''
        },
        submit: function (event) {
            let userInfo =[];
            localStorage.setItem(userInfo, JSON.stringify(User));
            if (!form.checkValidity()) {
                event.stopPropagation()
            }
            fetch('http://localhost:3000/auth/signup/', {
		        method: 'POST', 
		        headers: {
		            'Content-Type': 'application/json'
	            },
	            info: JSON.stringify({
		            id: this.id,
		            name: this.fullName,
                    password: this.password,
                    email: this.email
	            })
            }),
            fetch('http://localhost:3000/auth/login/', {
		        method: 'POST', 
		        headers: {
		            'Content-Type': 'application/json'
	            },
	            info: JSON.stringify({
		            id: this.id,
		            name: this.fullName,
                    password: this.password,
                    email: this.email
	            })
            })
    }
}
</script>

<style>
form {
    width: 350px;
}
.login {
    color: orangered;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
.login_layout {
    display: flex;
    flex-direction: column;
}
.field {
    padding: 10px 5px;
    margin: 5px 0;
}
.logForm {
    margin: 10px;
    padding: 15px;
    border: black 1px solid;
    border-radius: 10px 10px;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.19);

}
</style>