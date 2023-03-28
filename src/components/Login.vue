<template>
    <form ref="form" @submit.prevent="userLogin">
        <h1>Sign in</h1>
        <div class="login_layout">
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