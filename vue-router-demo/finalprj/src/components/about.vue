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
    <h1>About Me: Almina Tanglao 👩‍💻
<br><br>
Hey there! I’m Almina Tanglao, a 20-year-old IT Web Development student in my third year. Born on October 11, 2003, I’ve always had a passion for technology and creativity.
<br><br>
I love diving into the world of web development, and I’m particularly fascinated by Vue.js! It’s amazing how this framework allows me to bring my ideas to life and create interactive experiences.
<br><br>
When I’m not coding, you can find me experimenting with new recipes, exploring the latest tech trends, or enjoying a good book. I believe in continuous learning and sharing knowledge, so I’m excited to share my journey with you through this blog!
<br><br>
Let’s connect and explore the world of web development together! 🌟

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
