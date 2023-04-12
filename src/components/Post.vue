<template>
<div class="Post">
    <div class="form_tx1"><h3>{{ title }}</h3></div>
    <div class="form_tx2"><p>{{ description }}</p></div>   
    <img class="form_tx3" :src="imageUrl" >    
</div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        imageUrl: String
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
    height: 300px;
    border: bisque 1px transparent;
    box-shadow: 0 0px 0px 0 rgba(255, 112, 112, 0.884), 0 3px 12px 0 rgb(255, 99, 99);
    border-radius: 10px;
    padding: 10px;
}
</style>