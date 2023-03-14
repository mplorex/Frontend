<template>
  <div class="homeTemplate">
    <div class="appForm" id="form">
      <form @submit.prevent="createPost" class="form" id="form">
        <label class="label">Title</label>
        <input type="text" v-model="title">
        <label class="label">Body</label>
        <textarea v-model="body"></textarea>
        <label class="label">Select image</label>
        <input ref="fileInput" type="file" @input="pickFile">
        <button type="submit" class="btn" @click="submit">Post</button>
      </form>
        <div class="readPosts">
          <div class="postTitle"><h1>Read Posts</h1></div>
          <div class="testPost2"> 
            <h1>How to add friends</h1>
            <b>Looking to add friends to your Groupomania network? We can help you get started! Just head to your ...</b>
          </div>
          <div class="learnMore" href="https://www.google.com/" ><b>click here to read more</b></div> 
        </div>
            <div class="loginForm">
              <form>
                <h1> Sign in </h1>
                <div class="login_layout">
                  <input class="field" type="email" placeholder="Email" />
                  <input class="field" type="password" placeholder="Password" />
                  <button class="field btn">Sign in</button>
                </div>
              </form>
            </div>
    </div>
    <div class="unreadPosts">
      <div class="unreadTitle"><h1>Unread Posts</h1></div>
      <div class="testPost"> 
        <h1>Welcome post!</h1>
        <b>Welcome to our page! We are so glad you decided to join our Groupomania network.</b> 
      </div>
      <div class="post">
        <div v-for="(post, index) in posts" :key="index">
          <Post :title="post.title" :body="post.body"></Post>
            <div class="imagePreviewWrapper"
              :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage">
            </div>
            <button type="submit" class="btn">Update</button>
            <button type="submit" class="btn">Delete</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';

export default {
  name: 'App',
  components:{
    Post, 
  },
  
  data: () => ({
    title: '',
    body: '',
    image: '',
    posts: [
    ]
  }),
  methods: {
    selectImage () {
      this.$refs.fileInput.click()
    },
    pickFile () {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
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
.form {
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: auto;
  margin-bottom: 25px;
}
.label{
  margin-top: 20px;
  font-size: 20px;
  color: blue;
}
.btn{
  margin-top: 20px;
  font-size: 15px;
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
header {
  display: flex;
  top: 0px;
  width: 100%;
  z-index: var(--z-fixed);
}
.post {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
  
}
.postTitle, .testPost, .testPost2 {
  border-radius: 10px;
  margin: 10px;
  padding: 2px;
}
.testPost {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding: 10px;
  width: 350px;
}
.readPosts {
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

.loginForm{
  display: flex;
  padding: 10px;
  width: 330px;
  height: 250px;
  margin: auto;
  margin-bottom: 25px;
}
.field {
  padding: 10px;
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
.form, .readPosts, .loginForm, .unreadPosts, .post {
  border: bisque 1px transparent;
  box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
  border-radius: 10px;
}
.post, .testPost, .testPost2 {
  border: rgb(255, 214, 214) 1px solid;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0px 0px 0 rgb(255, 162, 162), 0 3px 12px 0 rgb(255, 154, 154);
}
@media screen and (min-width: 720px){

}
</style>
