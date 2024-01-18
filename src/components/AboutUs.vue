<script setup>
</script>

<template>
    <section class = "about-us" aria-labelledby="what-do-we-do">
      <h1 id="what-do-we-do" class = "about-us__heading">
        What do we do?
      </h1>
      <p class = "about-us__text">You might not have heard of us, but we're the people behind
        the following impactful programmes.</p>
        <div class = "about-us__container">
        <div class = "about-us__card">
          <h2>Get online week</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "about-us__button about-us__button--red" type="button">Read more</button>
        </div>
        <div class = "about-us__card">
          <h2>Learn my way</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "about-us__button about-us__button--red" type="button">Read more</button>
        </div>
        <div class = "about-us__card">
          <h2>Make it click</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "about-us__button about-us__button--red" type="button">Read more</button>
        </div>
        <div class = "about-us__card">
          <h2>Digital you</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "about-us__button about-us__button--red" type="button">Read more</button>
        </div>
      </div>
      <button class = "about-us__button about-us__button--red about-us__button--borderless" type="button">More about what we do</button>
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

.about-us__card {
  background-color: var(--white);
  flex-basis: 60%;
  margin: 1% 0;
  padding: 2%;
  color: var(--dark);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .about-us__card {
    flex-direction: row;
    flex-basis: 45%;
  }
}

@media (min-width: 992px) {
  .about-us__card {
    flex-basis: 23%;
  }
}
.about-us__button {
  margin: 8% 4% 3% 4%;
  padding: 4%;
  border-radius: 80px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
}

.about-us__button--red {
  color: var(--red-purple);
  background-color: var(--white);
  border: var(--dark) solid 1px;
}

.about-us__button:hover {
  background-color: var(--red-purple);
  color: var(--white);
}

.about-us__button--borderless {
  border: none;
  padding: 3%;
  align-self: center;
  margin: 2% 1% 1% 1%;
}

@media (min-width: 768px) {
  .about-us__button--borderless {
    border: none;
    padding: 1%;
  }
}

</style>
