<template>
    <div>
        <Post
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :imageUrl="post.imageUrl"
        />
    </div>
</template>

<script>
import Post from '../components/Post.vue';
export default {
    components:{
        Post
    }
}
</script>