<template>
    <form ref="form" @submit.prevent="createPost" class="postForm">
        <h1>Create a post!</h1>
        <div class="post_layout">
            <input
            class="field"
            type="title"
            name="title"
            required
            placeholder="Title"
            />
            <input
            class="field"
            type="description"
            name="description"
            required
            placeholder="Description"
            />
            <input
            class="image"
            type="file"
            name="file"
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

import {mapState} from 'pinia'
import {useUserStore} from '../store/user'

export default {
    computed: {
        ...mapState (useUserStore, ['user']), 

    },
    methods: {
        createPost () {
            if (this.$refs.form.checkValidity()) {
                
                const formData = new FormData(this.$refs.form)

                fetch('http://localhost:3000/api/posts/', {
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer '+ this.user.token
                    },
                    body: formData
                }).then(post => {
                    this.$emit('post', post)
                })
            }
        }
    }
}
</script>
