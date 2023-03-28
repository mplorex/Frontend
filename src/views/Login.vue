<template>
    <div class="login" id="login">
        <div class="logForm">
            <Login @user-login="userLogin"></Login>
        </div>
    </div>
</template>

<script> 
import Login from "../components/Login.vue"

export default {
    name: "App",
    components: {
        Login,
    },
    methods: {
        userLogin() {
            this.$router.push("/")
        }
    }
};

</script> 