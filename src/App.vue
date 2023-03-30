<template>
  <div class="app">
    <header>
      <div class="image">
        <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="75"
        height="75"
        /></div>
      <div class="wrapper">
        <nav>
          <div class="routerLink"><RouterLink to="/">Home</RouterLink></div>
          <div class="routerLink" v-if="!isAuth">
            <RouterLink to="/Login" >Login</RouterLink>
            <RouterLink to="/Signup">Signup</RouterLink>
          </div>
          <div class="routerLink"><button @click="authStore.logout()" class="btn btn-link nav-item nav-link">Logout</button></div>
        </nav>
      </div>
    </header>
  <RouterView @authenticated="setAuthenticated"></RouterView>
  </div>
</template>

<script>
import { useUserStore } from './store/user'
import { RouterLink, RouterView } from "vue-router";
import { mapState } from 'pinia'


export default {
  name: 'App',
  computed: {
    ...mapState(useUserStore, ['isAuth'])
  }
}
</script>

<style scoped>
.image {
  display: flex;
  margin: 10px 0px 0px 20px;
}

header {
  max-height: 30vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.logo {
  display: block;
  margin: 0px 170px 0px 0px;
}

nav {
  font-size: 12px;
  display: flex;
  flex-flow: wrap;
  margin-top: 1.5rem;
}

.routerLink {
  display: flex;
  border: black 1px solid;
  border-radius: 10px;
  margin: auto;
}
.app {
  border-radius: 10px;
  box-shadow: 1px 1px 18px 13px  rgb(255, 225, 225);
  background-color: rgb(255, 221, 221);
  -webkit-transition: box-shadow 1000ms linear;
  -ms-transition: box-shadow 1000ms linear;
  transition: background-color 1000ms linear;
}

nav a.router-link-exact-active {
  color: black;

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: black;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
