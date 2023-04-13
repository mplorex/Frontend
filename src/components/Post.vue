<template>
<div class="Post">
    <div class="form_tx1"><h3>{{ title }}</h3></div>
    <div class="form_tx2"><p>{{ description }}</p></div>   
    <img class="form_tx3" :src="imageUrl" />
    <div>
        <button @click="read = !read">Mark read</button> 
        <div>
            <h1 v-if="read">Post has not been read</h1>   
            <h1 v-else>Post has been read!</h1>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'pinia'
import {useUserStore} from '../store/user'

export default {
    data() {
        return {
            read: true
        }
    },
    props: {
        title: String,
        description: String,
        imageUrl: String
    },
    computed: {
        ...mapState (useUserStore, ['user']), 
    },
    mounted () {
        fetch('http://localhost:3000/api/posts/')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
    }
}
</script>
<style>
.form_tx1{
    font-size: 30px;
    text-align: center;
    color: black;
}
.form_tx2, .form_tx3{
    font-size: 20px;
    text-align: center;
    color: #006400;
}
.form_tx3{
    width: 100%;
    border-radius: 0px 0px 10px 10px;
}
.Post{
    display: flex;
    flex-flow: column;
    margin: auto;
    margin-top: 25px;
    width: 370px;
    height: 330px;
    border: bisque 1px transparent;
    box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
    border-radius: 10px;
    padding: 10px;
}
</style>