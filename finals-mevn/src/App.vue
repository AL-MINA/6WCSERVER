<template>

  <div>
    <!-- NAV BAR-->
     <nav class = "navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class = "navbar-brand float-left">MEVN CRUD Application</a>
        <ul class = "nav navbar-nav flex-row float-right">
          <li class = "nav-item">
            <router-link class = "nav-link pr-3" to = "/">Create a Student</router-link>
          </li>
          <li class = "nav-item">
            <router-link class = "nav-link" to = "/view">View Students</router-link>
          </li>
        </ul>
      </div>
     </nav>
     <!-- ROUTER VIEW -->
      <div class="container mt-5">
        <router-view></router-view>
      </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>