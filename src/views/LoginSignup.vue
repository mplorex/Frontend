<template>
    <div class="log">
        <div class="logForm"><Login></Login></div>
        <div class="logForm"><Signup></Signup></div>
    </div>
</template>

<script>
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';

export default {
    name: 'App',
    components:{
        Signup,
        Login,
    },
    data () { 
        return {
            email: '',
            password: '',
            name: ''
        };
    },

}
</script>

<style>
.log {
    display: flex;
    flex-flow: wrap;
}
.logForm {
    display: flex;
    flex-flow: wrap;
    padding: 15px;
    width: 330px;
    height: 250px;
    margin: auto;
    margin-bottom: 25px;
    border: bisque 1px transparent;
    box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
    border-radius: 10px;
}
</style>