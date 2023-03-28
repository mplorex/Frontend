<template>
    <form ref="form" @submit.prevent="userSignup">
        <h1>Sign up</h1>
        <div class="login_layout">
            <input
            class="field"
            type="name"
            name="name"
            v-model="name"
            required
            placeholder="Name"
            />
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
                Sign up
            </button>
        </div>
    </form>
</template>

<script>
import { useUserStore } from '@/store/user'
import { mapActions } from 'pinia'

export default {
    data () { 
        return {
            email: '',
            password: '',
            name: ''
        };
    },
    methods: { 
        ...mapActions(useUserStore, ['signup']),
        userSignup() {
            if (this.$refs.form.checkValidity()) {
                this.signup(this.name, this.email, this.password)
                .then(() => {
                    this.$emit('user-signup', true)
                })
            };
        },
    },
};
</script>