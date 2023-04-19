<template>
<div class="Post">
    <div class="form_tx1"><h3> Rate my post</h3></div>
    <div class="form_tx2"><p> Excited to be joining Groupomania's network!</p></div>
    <img src="../images/hawaii.jpg"/>   
    <div class="markRead">
        <div class="likeIcon"><button><svg-icon type="mdi" :path="path"></svg-icon></button></div>
        <div class="readText">
            <h1 v-if="read">Post has NOT been read</h1>   
            <h1 v-else>Post has been read!</h1>
        </div>
        <button @click="read = !read" class="pText">Mark read</button> 
    </div>
</div>
<div class="Post">
    <div class="form_tx1"><h3> My coworkers</h3></div>
    <div class="form_tx2"><p> Groupomania has allowed me to connect with coworkers in a safe and exclusive environment. Thank you for bringing this platform to us and see you at work!</p></div>   
    <div class="markRead">
        <div class="likeIcon"><button><svg-icon type="mdi" :path="path"></svg-icon></button></div>
        <div class="readText">
            <h1 v-if="read">Post has NOT been read</h1>   
            <h1 v-else>Post has been read!</h1>
        </div>
        <button @click="read = !read" class="pText">Mark read</button> 
    </div>
</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiThumbUp } from '@mdi/js';

export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
            read: true,
            path: mdiThumbUp
        }
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
    height: auto;
    border: bisque 1px transparent;
    box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
    border-radius: 10px;
    padding: 10px;
}
.markRead{
    display: flex;
    flex-flow: row;
    margin: auto;
    padding: 5px;
}
.pText, .likeIcon {
    padding: 5px;
}
.readText {
    font-size: 9px;
    padding: 5px;
}
</style>