<script setup>
import { useWhatWeDoStore } from '@/stores/whatWeDo';
import AboutCard from './AboutCard.vue';
const store = useWhatWeDoStore();
</script>

<template>
    <section class = "about-us" aria-labelledby="what-do-we-do">
      <h1 id="what-do-we-do" class = "about-us__heading">
        {{store.getTitle}}
      </h1>
      <p class = "about-us__text">{{store.getDetails}}</p>
        <div class = "about-us__container">
        <AboutCard
            v-for="(item) in store.getThingsWeDo"
            :key="item.id"
            :name="item.name"
            :heading="item.heading"
            :text="item.text"
          />
      </div>
      <button class = "about-us__button about-us__button--red" type="button">
        {{store.getButtonText}}</button>
    </section>

</template>

<style scoped>
.about-us {
  background-color: var(--mid-blue);
  color: var(--white);
  padding: 2% 6%;
  display: flex;
  flex-direction: column;
}

.about-us__heading {
  margin: 0.5% 0;
  padding: 0;
  width:fit-content;
  font-size: 1.6rem;
}

.about-us__text {
  margin: 1% 0;
  padding: 0;
  text-align: center;
  font-size: 1.1rem;
}

@media (min-width: 768px) {
  .about-us__text {
    text-align: left;
  }
}

.about-us__container {
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: stretch;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .about-us__container {
    gap: 1%;
  }
}

@media (min-width: 992px) {
  .about-us__container {
    justify-content: space-between;
  }
}

.about-us__button {
  border-radius: 80px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  border: none;
  padding: 3%;
  align-self: center;
  margin: 2% 1% 1% 1%;
}

@media (min-width: 768px) {
  .about-us__button {
    border: none;
    padding: 1%;
  }
}

.about-us__button--red {
  color: var(--red-purple);
  background-color: var(--white);
  border: var(--dark) solid 1px;
}

.about-us__button--red:hover {
  background-color: var(--red-purple);
  color: var(--white);
}

</style>
