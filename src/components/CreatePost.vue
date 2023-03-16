<template>
    <form ref="form" @submit.prevent="createPost" class="postForm">
        <h1>Create a post!</h1>
        <div class="post_layout">
            <input
            class="field"
            type="title"
            name="title"
            v-model="title"
            required
            placeholder="Title"
            />
            <input
            class="field"
            type="description"
            name="description"
            v-model="description"
            required
            placeholder="Description"
            />
            <input
            class="image"
            type="image"
            name="image"
            v-model="image"
            placeholder="Image"
            />
            <button
            type="submit"
            class="field btn"
            >
                Submit Post
            </button>
        </div>
    </form>
</template>
<script>
export default {
    data () {
        return {
            title: '',
            description: '',
            image: ''
        }
    },
    methods: {
        createPost () {
            if (this.$refs.form.checkValidity()) {
                let userInfo = localStorage.getItem('userInfo')
                if (userInfo) {
                    userInfo = JSON.parse(userInfo)
                } else {
                    return
                }
                
                const formData = new FormData(this.$refs.form)

                fetch('http://localhost:3000/api/posts/', {
                    mode: 'POST',
                    headers: {
                        'Authorization': 'Bearer' + userInfo.token
                    },
                    body: formData
                })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(post => {
                    this.$emit('post', post)
                })
            }
        }
    }
}
</script>
