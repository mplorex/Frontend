<template>
    <div class="login" id="login">
        <div class="logForm">
            <Signup @user-signup="userSignup"></Signup>
        </div>
    </div>
</template>

<script> 
import Signup from "../components/Signup.vue"

export default {
    name: "App",
    components: {
        Signup,
    },
    methods: {
        userSignup() {
            this.$router.push("/Login")
        }
    }
};

</script> 