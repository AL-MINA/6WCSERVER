<script>
import Profile from './components/Profile.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';

export default {
  name: 'App',
  components: {
    Profile,
    Education,
    Skills
  },
  data() {
    return {
      section2: "Projects",
      section3: "Certificates",
      projects: [
        { 
          name: "Responsive CRUD Coffee Website", 
          description: "Designed and implemented a fully functional CRUD website that ensures seamless user experience for placing and managing orders",
          made: "Made using HTML, CSS, JAVASCRIPT, PHP, MYSQL"
        },
        {
          name: "SOGA AI Art", 
          description: "Created a website that showcase the beauty of AI generated photos",
          made: "Made using NEXTJS, SASS, JAVASCRIPT, GSAP"
        },
        {
          name: "Early Stage Venture Capital Fund", 
          description: "An early stage venture capital fund that sources and invests in technology companies run by young innovators",
          made: "Made using REACTJS, TAILWINDCSS, GSAP"
        },
        {
          name: "Digital Clock, Stopwatch, To Do List", 
          description: "Designed a user-friendly Digital Clock, Stopwatch and To Do List application for efficient task management",
          made: "Made using React.js and CSS"
        }
      ],
      certificates: [
        "SEO Rank & Rise: The Beginner's Blueprint to Web Winning (Code Geeks)",
        "The Complete 2024 Web Development Bootcamp (Udemy)",
        "Legacy Javascript Algorithms and Data Structures (freecodecamp)",
        "Responsive Web Design (freecodecamp)",
        "Get Started with Figma (Coursera)"
      ],
    }
  }
}

</script>

<template>
  <main id="app">
    <Profile />
    <Education />

    <!--===================== PROJECTS =====================-->
    <h2 class="section">{{ section2 }}</h2><hr>
    <div class="projects__container">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <h3 class="semibold project__name">{{ project.name }}</h3>
        <ul>
          <li class="description">● {{ project.description }}</li>
          <li class="made">● {{ project.made }}</li>
        </ul>
      </div>
    </div>
    
    <!--===================== CERTIFICATES =====================-->
    <h2 class="section">{{ section3 }}</h2><hr>
    <div class="certificate__container">
      <ul>
        <li v-for="cert in certificates" :key="cert" class="certificates">● {{ cert }}</li>
      </ul>
    </div>
    
    <Skills />
  </main>
</template>

<style scoped>
#app {
  width: 90%;
  margin: auto;
}

.section {
    margin: 0;
    padding: 0;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -2px;
}

.projects__container, .certificate__container {
  padding-bottom: 1.3em;

}

.semibold {
  font-family: 'GeneralSans-Semibold', sans-serif;
  text-transform: uppercase;
  letter-spacing: -1px;
}

footer {
  margin-top: 2em;
  text-align: center;
}

@media only screen and (max-width: 767px) {
  #app {
    padding-top: 2em;
  }

  .section {
    font-size: var(--font-small);
  }

  hr {
    margin-bottom: var(--mb-small);
  }

  .project {
    margin-bottom: var(--mb-small);
  }

  .project__name {
    font-size: 1.2em;
  }

  .projects__container, .certificate__container {
    margin-bottom: var(--mb-large);
  }
}

@media only screen and (min-width: 768px) and (max-width: 1536px) {
  #app {
    padding-top: 2em;
  }

  .section {
    font-size: var(--font-medium);
  }

  hr {
    margin-bottom: var(--mb-medium);
  }

  .project {
    margin-bottom: var(--mb-small);
  }

  .project__name {
    font-size: 1.4em;
  }

  .projects__container, .certificate__container {
    margin-bottom: var(--mb-large);
  }
}

@media only screen and (min-width: 1537px) {
  #app {
    padding-top: 3em;
    width: 70%;
  }

  .section {
    font-size: var(--font-large);
  }

  hr {
    margin-bottom: var(--mb-medium);
  }

  .project {
    margin-bottom: var(--mb-medium);
  }

  .project__name {
    font-size: 1.6em;
  }

  .projects__container, .certificate__container {
    margin-bottom: var(--mb-extra-large);
  }
}
</style>
