<script setup>
import { RouterView } from 'vue-router';
import NavMenu from './components/NavMenu.vue';
import SearchForm from './components/SearchForm.vue';
import CardContainer from './components/CardContainer.vue';
</script>

<template>
  <header class = "header">
    <SearchForm />
      <button class = 'mode-button mode-button--white' type="button">Learn</button>
      <button class = 'mode-button mode-button--red' type="button">Donate</button>
      <img class = "logo" src="./assets/logo.png" alt="Good Things Foundation Logo">
      <NavMenu />
  </header>
  <RouterView />
  <CardContainer />
</template>

<style scoped>

.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1% 6% 0 6%;
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
