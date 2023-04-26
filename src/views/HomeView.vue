<template>
  <div class="homeTemplate">
    <div class="appForm" id="form">
      <CreatePost class="postForm" @add-new="addPost"></CreatePost>
    </div>
    <div class="unreadPosts">
      <UserPost/>
      <UserPosts/>
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :imageUrl="post.imageUrl"
      />
    </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import CreatePost from '../components/CreatePost.vue';
import Login from '../components/Login.vue';
import UserPost from '../components/UserPost.vue';
import UserPosts from '../components/UserPosts.vue';
import {mapState} from 'pinia';
import {useUserStore} from '../store/user';

export default {
  name: 'App',
  components:{
    CreatePost,
    Login,
    Post,
    UserPost,
    UserPosts
  },
  
  data: (post) => ({
    posts: []
  }),
  methods: {
    addPost(post) {
      console.log('post', post)
      this.posts.push(post)
    }
  },
  mutations: {
    POSTS: function(state, posts) {
      state.posts = posts;
    }
  },
  computed: {
        ...mapState (useUserStore, ['user']), 
  },
  actions: {
    getAllPosts({ commit }) {
      return new Promise((resolve, reject) => {
        instance.get('posts')
        .then(function(response) {
          commit('POST', response.data);
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
      });
    }
  },
  mounted () {
        fetch('http://localhost:3000/api/posts/' , {
          headers: {
                      'Authorization': 'Bearer '+ this.user.token
                    }
        }) 
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
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
}
.imagePreviewWrapper {
    width: 200px;
    height: 170px;
    display: block;
    cursor: pointer;
    margin: 0 auto 10px;
    background-size: cover;
    background-position: center center;
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
