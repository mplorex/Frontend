<template>
<div class="Post">
    <div class="form_tx1"><h3>{{ title }}</h3></div>
    <div class="form_tx2"><p>{{ body }}</p></div>   
    <div class="form_tx2"><p>{{ image }}</p></div>   
</div>
</template>

<script>
export default {
    props: {
        title: String,
        body: String,
        image: String
    }
}
</script>
<style>
.form_tx1{
    font-size: 30px;
    text-align: center;
    color: black;
}
.form_tx2{
    font-size: 20px;
    text-align: center;
    color: darkgreen;
}
</style>