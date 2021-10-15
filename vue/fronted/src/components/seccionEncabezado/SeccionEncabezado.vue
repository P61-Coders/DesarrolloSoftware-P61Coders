<template >
  <nav class="navbar fixed-top header">
      <div class="container app-header">
        <router-link class="row nav-logo" :to="{name: 'Home'}">
          <v-img
            src="img/fruver-logo.png"
            max-height="60px"
            max-width="60px"
            alt="Logo fruver - Grupo 61"
            eager :to="{name: 'Home'}">
          </v-img>
          Fruver
        </router-link>
        <menu-1></menu-1>
      </div>
  </nav>
</template>
<script>
import Menu1 from './components/Menu1.vue';

export default {
  name: "SeccionEncabezado",
  components: {
    Menu1,
  },
  data() {
    return{
      
    }
  },
  computed: {
    isLogged() {
      return localStorage.getItem("token");
    },
  },
};
</script>
<style scoped>
.header { 
  background-color: #F4FEFF;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
}

a {
  text-decoration: none;
}

.nav-logo{
  color: #2b044d;
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
}
</style>