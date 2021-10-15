<template >
  <nav class="navbar fixed-top header">
      <div class="container app-header">
          <router-link :to="{name: 'Home'}">
              <v-img
                  src="img/fruver-logo.png"
                  max-height="60px"
                  max-width="60px"
                  alt="Logo fruver - Grupo 61"
                  eager>
              </v-img>
              <!-- <h3 class="nav-logo">Fruver</h3> -->
          </router-link>
          <div>
              <menu-1></menu-1>
          </div>
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
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me3" },
        { title: "Click Me4" },
      ],
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
  overflow: hidden; 
  background-color: #F4FEFF;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
}
</style>