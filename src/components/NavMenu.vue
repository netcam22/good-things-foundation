<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <nav class = "navbar navbar--style" aria-label="primary">
        <div class = "navbar__element">
          <div class = "navbar__element navbar__element--burger"><i class="fa fa-bars"></i>
          <div class = "navbar__element navbar__element--cross" ><i class="fa fa-x"></i></div>
        </div>
        <ul class = "navbar__list navbar__list--style">
          <li class = "navbar__item" ><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
          <li class = "navbar__item" ><RouterLink :to="{name: 'what-to-do'}">What To Do</RouterLink></li>
          <li class = "navbar__item" ><RouterLink :to="{name: 'the-digital-divide'}">The Digital Divide</RouterLink></li>
          <li class = "navbar__item" ><RouterLink :to="{name: 'get-involved'}">Get Involved</RouterLink></li>
          <li class = "navbar__item" ><RouterLink :to="{name: 'our-network'}">Our Network</RouterLink></li>
          <li class = "navbar__item" ><RouterLink :to="{name: 'insights'}">Insights</RouterLink></li>
        </ul>
        </div>
      </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  margin: 0;
  padding: 0;
  z-index: 1000;
  max-height: fit-content;
  width: 10%; 
}

@media (min-width: 768px) {
  .navbar {
    flex-wrap: unset;
    width:100%;
    display: flex;
  }
}

@media (min-width: 992px) {
  .navbar {
    width: 80%;
  }
}

@media (min-width: 1200px) {
  .navbar {
    width: 60%;
  }
}

.navbar--style {
  background-color: transparent;
}

.navbar__list {
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 3%;
  display: none;
  width: 100%;
  margin: 0;
  line-height: 3rem;
}

.navbar__list--style {
  background-color: var(--mid-blue);
}

@media (min-width: 768px) {
  .navbar__list {
    padding: 0;
    flex-direction: row;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .navbar__list--style {
    background-color: transparent;
  }
}

@media (prefers-color-scheme: dark) {
  html[data-theme=auto] .navbar__list--style {
    color: var(--white);
  }
}
html[data-theme=dark] .navbar__list--style {
  color: var(--white);
}

.navbar__item {
  margin: 0;
  padding: 0;
}

.navbar__item a {
  text-decoration: none;
  font-size: 2rem;
  word-break: keep-all;
  cursor: pointer;
  color: var(--light);
}

.navbar__item a:hover {
  color: var(--dark);
}

@media (min-width: 768px) {
  .navbar__item a {
    font-size: 1.2rem;
  }
  .navbar__item a {
    color: var(--dark);
  }
  .navbar__item a:hover {
    color: var(--red-purple);
  }
}
.navbar__anchor {
  text-decoration: none;
  font-size: 2rem;
  word-break: keep-all;
  cursor: pointer;
}

.navbar__anchor--style {
  color: var(--light);
}

.navbar__anchor--style:hover {
  color: var(--dark);
}

@media (min-width: 768px) {
  .navbar__anchor {
    font-size: 1.2rem;
  }
  .navbar__anchor--style {
    color: var(--dark);
  }
  .navbar__anchor--style:hover {
    color: var(--red-purple);
  }
}

.navbar__element {
  margin: 0 1%;
  padding: 0;
  font-size: 3.5rem;
  cursor: pointer;
  line-height: 3.5rem;
}

@media (min-width: 768px) {
  .navbar__element {
    width: 100%;
    position: sticky;
  }
}
.navbar__element--burger {
  color: var(--mid-blue);
  margin-right: 2%;
  font-size: 3rem;
}

@media (min-width: 768px) {
  .navbar__element--burger {
    display: none;
  }
}
.navbar__element--cross {
  color: var(--dark);
  display: block;
  position: fixed;
  top: 1%;
  z-index: 2000;
  margin-right: 2%;
  font-size: 3rem;
  display: none;
}

@media (min-width: 768px) {
  .navbar__element--cross {
    display: none;
  }
}

.navbar__element:hover .navbar__list {
  display: flex;
}

.navbar__element:hover .navbar__element--cross {
  display: flex;
}
</style>
