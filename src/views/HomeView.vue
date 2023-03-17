<template>
  <div class="homeTemplate">
    <div class="appForm" id="form">
      <CreatePost class="postForm"></CreatePost>
        <div class="readPosts">
          <div class="postTitle"><h1>Read Posts</h1></div>
          <div class="testPost2"> 
            <h1>How to add friends</h1>
            <b>Looking to add friends to your Groupomania network? We can help you get started! Just head to your ...</b>
          </div>
          <div class="learnMore" href="https://www.google.com/" ><b>click here to read more</b></div> 
        </div>
      <Login class="loginForm"></Login>
    </div>
    <div class="unreadPosts">
      <div class="unreadTitle"><h1>Unread Posts</h1></div>
      <div class="testPost"> 
        <h1>Welcome post!</h1>
        <b>Welcome to our page! We are so glad you decided to join our Groupomania network.</b> 
      </div>
      <div class="cPost" :post="addPost"></div>
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
  },
  
  data: () => ({
    title: '',
    body: '',
    image: '',
    posts: [
    ]
  }),
  methods: {
    addPost (post) {
      this.posts.unshift(posts)
    },
    createPost () {
      this.posts.unshift({
        title: this.title,
        body: this.body,
        image: this.image,
      })
      this.title = ''
      this.body = ''
      this.image = ''
    },
    submit: function (event) {
      let userPost = [];
      localStorage.setItem(userPost, JSON.stringify(Post));
      fetch('http://localhost:3000/api/posts/', {
		    method: 'POST', 
		    headers: {
		    'Content-Type': 'application/json'
	      },
	    data: JSON.stringify({
		    title: this.title,
		    description: this.description,
        imageUrl: this.image
	  })})
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
.postTitle, .testPost, .testPost2 {
  border-radius: 10px;
  margin: 10px;
  padding: 2px;
}
.postForm, .loginForm {
  padding: 15px;
}
.readPosts, .postForm, .loginForm {
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
}
.unreadTitle {
  border: black 1px solid;
  border-radius: 10px;
  margin: 10px 10px 0px 10px;
}
.learnMore {
  border: black 1px solid;
  border-radius: 10px;
  margin: auto;
}
.learnMore:hover {
  transition: 1s;
  background-color: rgb(255, 116, 116);
}
.form, .readPosts, .unreadPosts, .postForm, .loginForm {
  border: bisque 1px transparent;
  box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
  border-radius: 10px;
}
.post, .testPost, .testPost2 {
  border: rgb(255, 214, 214) 1px solid;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0px 0px 0 rgb(255, 162, 162), 0 3px 12px 0 rgb(255, 154, 154);
}
</style>
