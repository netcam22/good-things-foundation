<script setup>
defineProps({
  section: {
    type: Object,
    required: true
  },
  heading: {
    type: Object,
    required: true
  },
  paragraph: {
    type: Object,
    required: false
  },
  button: {
    type: Object,
    required: false
  }
})
</script>

<template>
  <section :class="section.class" :aria-labelledby="section.aria">
    <h1 :class="heading.class" :id="section.aria">{{heading.text}}</h1>
      <p v-if="paragraph" :class="paragraph.class">
        {{paragraph.text}}
      </p>
      <button v-if="button" :class="button.class" type="button">{{button.text}}</button>
  </section>
</template>

<style scoped>

.headline {
  margin: 0;
  text-align: center;
}
.headline--image {
  background-image: url("./../assets/volunteers.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  flex-basis: 100%;
  background-position: center;
  padding: 2% 6%;
}

@media (min-width: 768px) {
  .headline--image {
    text-align: left;
  }
}
.headline__heading {
  text-align: center;
}
.headline__heading--hero {
  background-color: var(--mid-blue);
  color: var(--white);
  font-size: 3rem;
  font-weight: 600;
  margin: 3% 0;
  padding: 1% 2%;
  width: 100%;
}

@media (min-width: 768px) {
  .headline__heading--hero {
    width:fit-content;
  }
}
.headline__text {
  width: 100%;
}

.headline__text--hero {
  color: var(--mid-blue);
  background-color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  margin: 2% 0;
  padding: 1% 2%;
}

@media (min-width: 768px) {
  .headline__text--hero {
    width: 50%;
  }
}

.headline__button {
  cursor: pointer;
}
.headline__button--hero {
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
}

.headline__button--hero:hover {
  background-color: var(--red-purple);
  color: var(--white);
  border-color: var(--red-purple);
}

@media (min-width: 768px) {
  .headline__button--hero {
    padding: 1%;
  }
}
</style>
