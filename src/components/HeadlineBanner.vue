<script setup>
import { useHeadlineBannerStore } from '@/stores/headineBanner';
const store = useHeadlineBannerStore();
import HeadlineBlock from './HeadlineBlock.vue';
</script>

<template>
<div class = "headline-box headline-box--image"></div>
<HeadlineBlock
      :section="store.getSection"
      :heading="store.getHeading"
      :paragraph="store.getParagraph"
      :button="store.getButton"
  />
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
    flex-basis: 50%;
  }
}

.headline-box--image {
  background-image: url('./../assets/charity-people.png');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
