<template>
  <!-- <div id="brand">
    <h4>Mental Health Matters</h4>
  </div> -->
  <!-- <Login/> -->
  <!-- <NavBarGeneral/> -->
  <div id="nav">
    <!-- <h3 id="mhm">Mental Health Matters</h3> -->
  <!-- <NavBarPatient/>
  <NavBarCounsellor/> -->
  </div>
  <router-view/>
</template>

<script>
// import Login from "./components/Login.vue";
// import NavBarGeneral from "./components/NavBarGeneral.vue"
// import NavBarPatient from "./components/NavBarPatient.vue"
// import NavBarCounsellor from "./components/NavBarCounsellor.vue"

export default {
  // components: {NavBarPatient, NavBarCounsellor },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* #brand {
  float: left;
  margin-right: 100px;
} */
#mhm{
  float: left;
  margin-left: 100px;
  margin-top: -2px;

  /* idk why but only -2px then looks aligned  */
} 
#nav {
  text-align: right;
  /* float: right; */
  margin-right: 50px; 
}

#nav a{
  font-weight: bold;
  color:lightslategray;
}

#nav a.router-link-exact-active {
  color:black;
}
</style>
