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
            :value="file"
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
    data () { 
        return {
            title: '',
            description: '',
            file: ''
        };
    },
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
                    const p = {title: this.title, description: this.description, file: this.file, token: this.user.token}
                    console.log('data', p)
                    this.$emit('addNew', p)
                })
            }
        }
    }
}
</script>
