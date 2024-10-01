<template>
    <main>
        <div id="title" class="title">
            <img class="photo" src="../../public/2x21.png" alt="">
            <div class="container">
                <h1 class="name">{{ name }}</h1>
                <p class="contacts">| {{ email }} | {{ number }} | {{ github }} |</p>
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'Profile',
    data() {
        return {
        name: "Almina P. Tanglao",
        email: "tanglaoalmina11@gmail.com",
        number: "09695674925",
        github: "github.com/AL-MINA",
        }
    }
}
</script>

<style scoped>
main {
    margin: 0;
    padding: 0;
    margin-bottom: 3em;
}

#title {
    text-align: center;
    display: flex;
}

.photo {
    border-radius: 50%;
    object-fit: cover;
}

.name {
    font-family: 'GeneralSans-Bold', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -2px;
    color: #1D1D1B;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contacts {
    color: #1D1D1B;
    font-weight: normal;
}

@media only screen and (max-width: 767px) {
    .contacts {
        font-size: var(--font-body-small);
    }

    .photo {
        width: 100px;
        height: 100px;
    }

    .name {
        font-size: 0.7em;
    }

    .contacts {
        font-size: 0.5em;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1536px) {
    .photo {
        width: 150px;
        height: 150px;
    }

    .name {
        font-size: 1em;
    }

    .contacts {
        font-size: 0.5em;
    }
}

@media only screen and (min-width: 1537px) {
    .photo {
        width: 200px;
        height: 200px;
    }

    .name {
        font-size: var(--font-small);
    }

    .contacts {
        font-size: var(--font-body-large);
    }
}
</style>