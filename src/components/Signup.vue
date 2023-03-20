<template>
    <form ref="form" @submit.prevent="userSignup">
        <h1>Sign up</h1>
        <div class="login_layout">
            <input
            class="field"
            type="fullName"
            name="fullName"
            v-model="fullName"
            required
            placeholder="Full Name"
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
export default {
    data () {
        return {
            email: '',
            password: '',
            fullName: ''
        }
    },
    methods: {
        userSignup () {
            if (this.$refs.form.checkValidity()) {
                let userInfo = localStorage.getItem("userInfo")

                if (userInfo) {
                    userInfo = JSON.stringify(userInfo)
                } else {
                    return
                }
                fetch('http://localhost:3000/api/auth/signup/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + userInfo.token
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password,
                        fullName: this.fullName,
                        id: this.id
                    })
                })

                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })

                .then(data => {
                    localStorage.setItem('userInfo', data)
                    this.$emit('user-signup', true)
                })
            }
        }
    }
}
</script>