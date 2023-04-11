<template>
<div class="Post">
    <div class="form_tx1"><h3>test title</h3></div>
    <!-- <div class="form_tx2"><p>{{ description }}</p></div>   
    <div class="form_tx3">{{ imageUrl }}</div>    -->
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
.form_tx2{
    font-size: 20px;
    text-align: center;
    color: darkgreen;
}
</style>