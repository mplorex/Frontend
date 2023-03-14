<template>
<div class="login" id="login">
    <div class="logForm"><form @submit.prevent="createUser">
        <h1> Sign in </h1>
        <div class="login_layout" v-for="(user, index) in users" :key="index">
            <User :email="user.email" :password="user.password"></User>
            <input class="field" type="email" name="email" v-model="input.email" placeholder="Email" />
            <input class="field" type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="submit" class="field btn" v-on:click="login">Sign in</button>
        </div>
        
    </form></div>
    <div  class="logForm"><form>
        <h1> Sign up </h1>
        <div class="login_layout" v-for="(user, index) in users" :key="index">
            <User :email="user.email" :password="user.password" :fullName="user.fullName"></User>
            <input class="field" type="email" name="email" v-model="input.email" placeholder="Email" />
            <input class="field" type="password" name="password" v-model="input.password" placeholder="Password"/>
            <input class="field" type="text" name="fullName" v-model="input.fullName" placeholder="Full name"/>
            <button type="submit" class="field btn" v-on:click="signup()"> Sign up</button>
        </div>
    </form></div>
</div>
</template>

<script>
import User from '../components/User.vue';

export default {
    name: 'App',
    components:{
        User,
    },
    info: () => ({
        id: '',
        password: '',
        email: '',
        fullName: '',
        users: [
        ]
    }),
    methods: {
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
                if(this.input.email != "" && this.input.password != "" && this.input.password != "") {
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