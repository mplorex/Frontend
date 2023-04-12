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
</style>