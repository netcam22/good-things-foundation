<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <header class = "header">
      <form class = 'search-form'>
        <label class = 'search-form__icon' for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input class = 'search-form__input' type="search" id="search" name="search" placeholder="Search">
      </form>

      <button class = 'mode-button mode-button--white' type="button">Learn</button>
      <button class = 'mode-button mode-button--red' type="button">Donate</button>
      <img class = "logo" src="./assets/logo.png" alt="Good Things Foundation Logo">
      <NavMenu />
      <!-- <nav> 
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>-->
  </header>

  <RouterView />
</template>

<style scoped>

body {
  margin: 0;
  padding: 0;
  background-color: var(--white);
  color: var(--dark);
}
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1% 6% 0 6%;
}

.search-form{
  flex-basis: 50%;
  padding: 0.5%;
  margin: 0;
}

@media (min-width: 768px) {
  .search-form {
    flex-basis: 78%;
  } 
}
.search-form__icon{
  font-size: 1.4rem;
  margin: 0;
}

.search-form__input{
  background-color: var(--white);
  border: var(--dark) solid 1px;
  z-index: 1000;
}

@media (min-width: 768px) {
  .search-form__input {
    flex-basis: 78%;
    padding: 0.5rem;
    font-size: 1.2rem;
  } 
}
.logo {
  width:50%;
  margin: 1% 0;
}

@media (min-width: 768px) { 
  .logo {
    width:30%;
  }
}

@media (min-width: 992px) {
  .logo {
    width:15%;
  }
}


.mode-button {
  flex-basis: 22%;
  padding: 0.5%;
  margin: 1% 1% 0 0;
  width: fit-content;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
}

.mode-button--white {
  background-color: var(--white);
  color: var(--red-purple);
  border: var(--dark) solid 1px;
}

.mode-button--red:hover {
  background-color: var(--mid-blue);
  color: var(--white);
  border: var(--mid-blue) solid 1px;
}

.mode-button--red {
  background-color: var(--red-purple);
  color: var(--white);
  border: var(--red-purple) solid 1px;
}

.mode-button--white:hover {
  background-color: var(--white);
  color: var(--mid-blue);
  border: var(--dark) solid 1px;
}

@media (min-width: 768px) {
  .mode-button {
    flex-basis: 10%;
    margin: 0.5% 0.5% 0 0;
    font-size: 1.1rem;
  } 
}

</style>
