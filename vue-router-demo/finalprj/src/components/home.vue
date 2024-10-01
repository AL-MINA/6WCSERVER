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
    <h1>Welcome to My Vue-tiful World! 🌟
<br><br>
Dive into the dynamic realm of Vue.js, where building stunning web applications feels like magic! Join me on this adventure as we explore the ins and outs of this incredible framework.
<br><br>
🚀 What to Expect:
<br><br>
Fun Tutorials: Learn Vue.js through quirky examples and hands-on projects that’ll make you say, “Aha!” <br><br>
Creative Insights: Discover tips and tricks that will make your coding journey not just easier, but way more fun!<br><br>
Personal Projects: Follow along as I share my own Vue.js creations—some hits, some misses, but all part of the learning experience!<br><br>
Whether you’re just starting or a seasoned pro, there’s something here for everyone. Let’s turn coding into a delightful adventure together!

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
