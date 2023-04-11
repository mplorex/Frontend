<template>
  <div class="homeTemplate">
    <div class="appForm" id="form">
      <CreatePost class="postForm"></CreatePost>
    </div>
    <div class="unreadPosts">
      <div class="cPost" :post="addPost"></div>
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :body="post.description"
        :image="post.image"
        :token="post.token"
      />
    </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import CreatePost from '../components/CreatePost.vue';
import Login from '../components/Login.vue';

export default {
  name: 'App',
  components:{
    CreatePost,
    Login,
    Post
  },
  
  data: () => ({
    title: '',
    body: '',
    image: '',
    token: '',
    posts: ['a', 'b', 'c']
  }),
  methods: {
    addPost() {
      this.post.unshift(posts)
    }
  }
}
</script>

<style>
.appForm {
  display: flex;
  flex-flow: wrap;
}
header {
  display: flex;
  top: 0px;
  width: 100%;
  z-index: var(--z-fixed);
}
.postForm {
  padding: 15px;
} 
.postForm {
  display: flex;
  flex-flow: wrap;
  width: 330px;
  height: 250px;
  margin: auto;
  margin-bottom: 25px;
}
.unreadPosts {
  display: flex;
  flex-flow: wrap;
  margin: auto;
  margin-top: 25px;
  width: 370px;
  height: 200px;
}
.form, .postForm {
  border: bisque 1px transparent;
  box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
  border-radius: 10px;
}
.post{
  border: rgb(255, 214, 214) 1px solid;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0px 0px 0 rgb(255, 162, 162), 0 3px 12px 0 rgb(255, 154, 154);
}
</style>
