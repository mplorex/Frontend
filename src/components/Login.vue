<template>
    <form ref="form" @submit.prevent="userLogin" class="log">
        
        <div>
            <h1>Sign in</h1>
            <input
            class="field"
            type="email"
            name="email"
            v-model="email"
            required
            placeholder="Email"
            />
            <input
            class="field"
            type="password"
            name="password"
            v-model="password"
            min="5"
            required
            placeholder="Password"
            />
            <button
            type="submit"
            class="field btn"
            >
                Sign in
            </button>
        </div>
    </form>
</template>

<script>
import { useUserStore } from '../store/user'
import { mapActions } from 'pinia'

export default {
    data () { 
        return {
            email: '',
            password: ''
        };
    },
    methods: { 
        ...mapActions(useUserStore, ['login']),
        userLogin() {
            if (this.$refs.form.checkValidity()) {
                this.login(this.email, this.password)
                .then(() => {
                    this.$emit('user-login', true)
                })
            };
        },
    },
};
</script>
<style>
form {
    display: flex;
    flex-flow: wrap;
    height: auto;
}
.log{
    width: 500px;
    margin: auto;
    padding: 15px;
    border: bisque 1px transparent;
    box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
    border-radius: 10px;
}
</style>