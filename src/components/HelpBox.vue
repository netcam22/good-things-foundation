<script setup>
import {useHelpBoxStore} from '@/stores/helpBox';
const store = useHelpBoxStore();
import HelpForm from './HelpForm.vue';
</script>

<template>
<section class = "help-box" aria-labelledby="how-can-we-help">
  
          <h1 class = "help-box__heading" id="how-can-we-help">{{store.getHeading}}</h1>
          <p class = "help-box__text">
            {{store.getText}}
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
  font-size: 1.3rem;
}
</style>
