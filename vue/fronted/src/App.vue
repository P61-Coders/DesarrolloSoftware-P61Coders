<template>
  <v-app>
    
    <header
      app  
      v-show="!['Admin','GestorUsuarios','GestorCategorias','GestorArticulos'].includes($route.name)" >
      <seccion-encabezado/>
    </header>

    <v-main>
      <router-view/>
    </v-main>

    <footer>
      <seccion-footer/>
    </footer>

  </v-app>
</template>

<script>
import SeccionEncabezado from './components/seccionEncabezado/SeccionEncabezado.vue';
import SeccionFooter from './components/seccionFooter/SeccionFooter.vue';

export default {
  name: 'App',
  components: { 
    SeccionEncabezado,
    SeccionFooter,
  },
  data() {
    return{

    }
  },
};
</script>
