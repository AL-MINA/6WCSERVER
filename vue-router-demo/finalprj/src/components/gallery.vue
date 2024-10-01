<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1>Gallery: Sipping Through Life 🍹
<br><br>
Welcome to my gallery of favorite drinks! Here, I’ve captured moments with some of my go-to beverages, each with its own story and vibe. From refreshing smoothies to cozy coffees, these drinks fuel my creativity and keep me inspired.
I hope you find something here that inspires you to mix up your own favorites! Cheers! 🥤
<br><br>
<img alt="matcha" class="logo" src="@/assets/matcha.jpg" width="200" height="200" />
<img alt="sea" class="logo" src="@/assets/sea.jpg" width="200" height="200" />
<img alt="str" class="logo" src="@/assets/str.jpg" width="200" height="200" />

</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
