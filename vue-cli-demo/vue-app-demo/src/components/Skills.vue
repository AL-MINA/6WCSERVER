<template>
  <div>
    <h2 class="section">{{ section4 }}</h2><hr>
    <div class="skillset__container">
      <ul>
        <li v-for="skill in skillset" :key="skill" class="skills">● {{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      section4: "Technical Skills",
      skillset: [
        "HTML", "CSS", "PYTHON", "JAVA", "PHP", "NODE.JS", "EXPRESS.JS", 
        "MYSQL", "MONGODB", "FIREBASE", "FIGMA", "Web Development", "Wireframing", "UI/UX Design", "Branding"
      ],
    }
  }
}
</script>

<style scoped>

.section {
    margin: 0;
    padding: 0;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -2px;
}

@media only screen and (max-width: 767px) {
  .skills {
    font-size: var(--font-body-small);
  }

  .section {
    font-size: var(--font-small);
  }

  .skillset__container {
    margin-bottom: var(--mb-large);
  }
}

@media only screen and (min-width: 768px) and (max-width: 1536px) {
  .skills {
    font-size: var(--font-body-medium);
  }

  .skillset__container {
    margin-bottom: var(--mb-large);
  }
}

@media only screen and (min-width: 1537px) {
  .skills {
    font-size: var(--font-body-large);
  }

  .skillset__container {
    margin-bottom: var(--mb-extra-large);
  }
}
</style>

