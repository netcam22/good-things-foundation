<script setup>
import HelpForm from './HelpForm.vue';

</script>

<template>
 <section class = "help-box" aria-labelledby="how-can-we-help">
  
          <h1 class = "help-box__heading" id="how-can-we-help">How can we help you?</h1>
          <p class = "help-box__text">
            Let us know who you are and what you're looking for, 
            and we'll help you get to the right place.
          </p>

          <HelpForm/>

        </section>
</template>

<style scoped>
.help-box {
  padding: 2% 6%;
  flex-basis: 100%;
  background-color: var(--light);
  color: var(--dark);
}

.help-box__heading {
  margin: 0.5% 0;
  padding: 0;
  width:fit-content;
  font-size: 1.6rem;
}

.help-box__text {
  margin: 1% 0;
  padding: 0;
  font-size: 1.1rem;
}
</style>
