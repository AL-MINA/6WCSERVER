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
    <h1>
Here’s a simple and inviting contact page for you:
<br><br>
Contact Me 📬
<br><br>
I’d love to hear from you! Whether you have questions, feedback, or just want to chat about web development, feel free to reach out.
<br><br>
Facebook: Almina Tanglao<br><br>
Email: tanglaoalmina11@gmail.com<br><br>
Mobile: 0969-567-4925
<br><br>
Let’s connect and share ideas! Looking forward to hearing from you! 😊</h1>
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
