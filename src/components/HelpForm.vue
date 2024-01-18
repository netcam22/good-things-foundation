<script setup>
</script>

<template>
          <form class ="help-box__form" id="i-form">
            <label class ="help-box__label" for="i-am">I am</label>
              <select class ="help-box__select" id="i-am">
                <option value="individual">an individual</option>
                <option value="organisation">an organisation</option>
                <option value="group">a group</option>
                <option value="journalist">a journalist</option>
              </select>
              <label class ="help-box__label" for="i-want">and I want</label>
              <select class ="help-box__select" id="i-want">
                <option value="learn">to learn</option>
                <option value="volunteer">to get advice</option>
                <option value="volunteer">to volunteer</option>
                <option value="contact">to speak to someone</option>
              </select>
              <button class ="help-box__button help-box__button--red" type="button">Start now</button>
          </form>
</template>

<style scoped>
.help-box__form {
  background-color: var(--white);
  padding: 1%;
  margin: 1% 0;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

@media (min-width: 768px) {
  .help-box__form {
    flex-direction: row;
  }
}

.help-box__label {
  background-color: var(--white);
  padding: 0.2%;
  margin: 0.2%;
}

.help-box__select {
  background-color: var(--white);
  color: var(--mid-blue);
  padding: 0.2%;
  margin: 0.2%;
  width: auto;
  font-size: 1.2rem;
}

.help-box__button {
  margin: 2% 1%;
  padding: 2%;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
}

.help-box__button--red {
  background-color: var(--red-purple);
  color: var(--white);
  border: var(--white) solid 1px;
}

.help-box__button--red:hover {
  background-color: var(--white);
  color: var(--red-purple);
  border: var(--red-purple) solid 1px;
}

@media (min-width: 768px) {
  .help-box__button  {
    margin: 0.2%;
    padding: 0.6%;
    font-size: 1rem;
  }
}
</style>
