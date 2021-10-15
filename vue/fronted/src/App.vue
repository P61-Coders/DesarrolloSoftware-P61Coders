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

  </v-app>
</template>

<script>
import SeccionArticulos from './components/SeccionArticulos.vue';
import SeccionEncabezado from './components/seccionEncabezado/SeccionEncabezado.vue';

export default {
  name: 'App',
  components: { 
    SeccionArticulos,
    SeccionEncabezado, 
  },
  data() {
    return{

    }
  },
};
</script>
