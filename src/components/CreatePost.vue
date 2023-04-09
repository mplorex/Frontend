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
            type="file"
            name="image"
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
            image: '',
            token: ''
        }
    },
    methods: {
        createPost () {
            if (this.$refs.form.checkValidity()) {
                
                const formData = new FormData(this.$refs.form)

                fetch('http://localhost:3000/api/posts/', {
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer '+ this.token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(formData)
                }).then(post => {
                    this.$emit('post', post)
                })
            }
        }
    }
}
</script>
