<template>
    <div class="deleteAccount"><a href="#" @click="deleteAccount">Delete Account</a></div>
</template>

<script>
import { useUserStore } from '../store/user';
import { mapState, mapActions } from 'pinia';

export default {
    computed: {
        ...mapState(useUserStore, ['isAuth'])
    },
    methods: {
    ...mapActions(useUserStore, ['delete']),
    deleteAccount() {
        this.delete()
        this.$router.push('/login')
    }
    }
}
</script>

<style>
.deleteAccount{
    display: flex;
    justify-content: center;
    border: black 1px solid;
    border-radius: 10px;
    margin: auto;
    width: 110px;
}
</style>