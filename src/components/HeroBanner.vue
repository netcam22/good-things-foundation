<script setup>
import {useHeroBannerStore} from '@/stores/heroBanner';
const store = useHeroBannerStore();
</script>

<template>
  <section class = "hero" aria-labelledby="get-online-week">
    <h1 class = "hero__heading" id="get-online-week">{{store.getHeading}}</h1>
      <p class = "hero__text">
        {{store.getText}}
      </p>
      <button class = "hero__button" type="button">{{store.getButtonText}}</button>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("./../assets/volunteers.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  flex-basis: 100%;
  background-position: center;
  margin: 0;
  padding: 2% 6%;
  text-align: center;
}

@media (min-width: 768px) {
  .hero {
    text-align: left;
  }
}
.hero__heading {
  background-color: var(--mid-blue);
  color: var(--white);
  font-size: 3rem;
  font-weight: 600;
  margin: 3% 0;
  padding: 1% 2%;
  text-align: center;
  width: 100%;
}

@media (min-width: 768px) {
  .hero__heading {
    width:fit-content;
  }
}

.hero__text {
  color: var(--mid-blue);
  background-color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  margin: 2% 0;
  padding: 1% 2%;
  width: 100%;
}

@media (min-width: 768px) {
  .hero__text {
    width: 50%;
  }
}
.hero__button {
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin: 0 0 3% 0;
  padding: 1.5%;
  background-color: var(--white);
  border: var(--white) solid 1px;
  border-radius: 80px;
  color: var(--red-purple);
  cursor: pointer;
}

.hero__button:hover {
  background-color: var(--red-purple);
  color: var(--white);
  border-color: var(--red-purple);
}

@media (min-width: 768px) {
  .hero__button {
    padding: 1%;
  }
}
</style>
