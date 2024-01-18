<script setup>
</script>

<template>
<section class = "headline-box headline-box--image"></section>
<section class = "headline-box headline-box--blue" aria-labelledby="social-change-charity">
  <h1 class = "headline-box__heading" id="social-change-charity">
    We are a social change charity, helping people to improve their lives
    through digital.
  </h1>
  <p class = "headline-box__text">We tackle the most pressing issues of our time, working with partners in thousands 
  of communities accross the UK and further afield.</p>
  <button class = "headline-box__button" type="button">Learn more about us</button>
</section>
</template>

<style scoped>
.headline-box {
  min-height: 30vh;
  flex-basis: 100%;
  background-position: center;
  margin: 0;
  padding: 2% 6%;
  text-align: center;
}

@media (min-width: 768px) {
  .headline-box {
    text-align: left;
  }
}
.headline-box--image {
  background-image: url('./../assets/charity-people.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.headline-box--blue {
  background-color: var(--mid-blue);
  color: var(--white);
}

@media (min-width: 768px) {
  .headline-box {
    flex-basis: 50%;
  }
}
.headline-box__heading {
  margin: 3% 0 2% 0;
  padding: 0;
  width:fit-content;
}

.headline-box__text {
  margin: 1% 0;
  padding: 0;
}

.headline-box__button {
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin: 1% 0 3% 0;
  padding: 1.5%;
  background-color: transparent;
  border: var(--white) solid 2px;
  border-radius: 80px;
  color: var(--white);
  cursor: pointer;
}

.headline-box__button:hover {
  background-color: var(--white);
  color: var(--mid-blue);
}
</style>
