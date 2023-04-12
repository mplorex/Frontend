<template>
    <form ref="form" @submit.prevent="createPost" class="postForm">
        <div class="postTitle"><h1>Create a post!</h1></div>
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
            class="custom-file-input"
            type="file"
            name="file"
            ref="myFiles"
            placeholder="Image"
            multiple
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
                }).then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                }).then (post => {
                    this.$emit('add-new', post)
                })   
            }
        }
    }
}
</script>

<style>
.postTitle{
    margin: 0px 0px -30px 10px;
}
.post_layout {
    width: 100%;
    display: flex;
    flex-flow: wrap;
}

</style>
