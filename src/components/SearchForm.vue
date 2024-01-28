<script setup>

</script>

<template>
  <form class = 'search-form'>
    <label class = 'search-form__icon' for="search">
        <i title = "search" aria-hidden="true" class="fa-solid fa-magnifying-glass"></i>
        <span class="search-form__sr-only">Search input field</span>
      </label>
    <input class = 'search-form__input' type="search" id="search" name="search" placeholder="Search">
  </form>
</template>

<style scoped>
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
.search-form__sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
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
</style>
