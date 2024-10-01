<template>
  <div class="container">
    <h2 class="section">{{ section1 }}</h2><hr>
    <div class="education__container">
      <div class="educ__content">
        <div class="school">
          <h3 class="semibold educ__school">{{ school1 }}</h3>
          <h3 class="semibold educ__school schl">{{ schoolAddress1 }}</h3>
        </div>
        <div class="course">
          <p class="educ__content crse"><em>{{ course }}</em></p>
          <p class="educ__content">{{ schoolYear1 }}</p>
        </div>
      </div>
      <hr>

      <div class="educ__content">
        <div class="school">
          <h3 class="semibold educ__school">{{ school2 }}</h3>
          <h3 class="semibold educ__school schl">{{ schoolAddress2 }}</h3>
        </div>
        <div class="course">
          <p class="educ__content crse"><em>{{ strand }}</em></p>
          <p class="educ__content">{{ schoolYear2 }}</p>
        </div>
      </div>
      <hr>

      <div class="educ__content">
        <div class="school">
          <h3 class="semibold educ__school">{{ school3 }}</h3>
          <h3 class="semibold educ__school schl">{{ schoolAddress3 }}</h3>
        </div>
        <div class="course">
            <p class="educ__content crse"><em>{{ }}</em></p>
          <p class="educ__content">{{ schoolYear3 }}</p>
        </div>
      </div>
      <hr>

      <div class="educ__content">
        <div class="school">
          <h3 class="semibold educ__school">{{ school4 }}</h3>
          <h3 class="semibold educ__school schl">{{ schoolAddress4 }}</h3>
        </div>
        <div class="course">
            <p class="educ__content crse"><em>{{ }}</em></p>
          <p class="educ__content">{{ schoolYear4 }}</p>
        </div>
      </div>
      <hr>

      <div class="coursework">
        <p class="relevant">Relevant Coursework:</p>
        <ul>
          <li v-for="course in relevantCoursework" :key="course" class="coursework">● {{ course }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      section1: "Education",
      school1: "Holy Angel University",
      school2: "Holy Angel University",
      school3: "Angeles City National Trade School",
      school4: "Virgen Delos Remedios Elementary School",
      schoolAddress1: "#1 Holy Angel St, Angeles, Pampanga",
      schoolAddress2: "#1 Holy Angel St, Angeles, Pampanga",
      schoolAddress3: "4HP7+W7F, Fil-Am Friendship Hwy, Angeles, Pampanga",
      schoolAddress4: "68 Lourdes St, Angeles, Pampanga",
      course: "B.S in Information Technology with area specialization in Web Development",
      strand: "Information and Communication Technology",
      schoolYear1: "2022-2026",
      schoolYear2: "2020-2022",
      schoolYear3: "2016-2020",
      schoolYear4: "2010-2016",
      relevantCoursework: [
        "Dynamic Web Application and Development Tools",
        "Data Structure and Algorithms",
        "Object-Oriented Programming",
        "Information Assurance and Security",
        "Advance Database",
        "Web and Advertising Publishing Concepts",
        "Web Server and Client Services"
      ],
    }
  }
}
</script>

<style scoped>
.container {
    margin-bottom: 4em;
}

.school, .course {
  display: flex;
  justify-content: space-between;
}

.section {
    margin: 0;
    padding: 0;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -2px;
}

.educ__school {
    font-weight: bold;
    letter-spacing: -0.275px;
}

@media only screen and (max-width: 767px) {
  .educ__school, .educ__content {
    line-height: 105%;
    font-size: 1em;
  }

  .educ__school {
    font-size: 1em;
  }

  .section {
    font-size: var(--font-small);
  }

  .schl {
    width: 40%;
    text-align: right;
  }

  .crse {
    width: 60%;
  }

  .school, .course {
    margin-bottom: var(--mb-small);
  }

  .relevant {
    font-size: var(--font-extra-small);
  }

  .coursework {
    font-size: var(--font-body-small);
  }

  .education__container {
    margin-bottom: var(--mb-large);
  }
}

@media only screen and (min-width: 768px) and (max-width: 1536px) {
  .educ__school, .educ__content {
    line-height: 105%;
  }

  .schl {
    width: 40%;
    text-align: right;
  }


  .section {
    font-size: 2em;
  }

  .crse {
    width: 60%;
  }

  .relevant {
    font-size: var(--font-extra-small);
  }

  .educ__school {
    font-size: 1.1em;
  }

  .educ__content, .coursework {
    font-size: var(--font-body-medium);
  }

  .education__container {
    margin-bottom: var(--mb-large);
  }
}

@media only screen and (min-width: 1537px) {
  .educ__school, .educ__content {
    line-height: 105%;
  }

  .section {
    font-size: var(--font-large);
  }

  .crse {
    width: 40%;
  }

  .school, .course {
    margin-bottom: var(--mb-small);
  }

  .educ__school {
    font-size: 1.2em;
  }

  .educ__content, .coursework {
    font-size: var(--font-body-large);
  }

  .education__container {
    margin-bottom: var(--mb-extra-large);
  }
}
</style>
