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
    <h1> Unpacking Vue.js 🌐
<br><br>
Welcome to my blog! Here, I share insights, tips, and stories from my journey with Vue.js. Expect a mix of tutorials, project breakdowns, and reflections on my coding experiences.
<br><br>
I aim to make complex concepts approachable and fun, so whether you're a beginner or a seasoned developer, you’ll find something valuable here. Join me as we explore the vibrant world of Vue.js, and feel free to leave comments or questions—I love connecting with fellow developers! 💬

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
