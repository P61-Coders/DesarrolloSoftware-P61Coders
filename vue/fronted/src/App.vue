<template>
  <v-app>
    
    <v-app-bar app>
      <seccion-encabezado/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SeccionArticulos from './components/SeccionArticulos.vue';
import SeccionEncabezado from './components/SeccionEncabezado.vue';

export default {
  components: { SeccionArticulos,SeccionEncabezado },
  name: 'App',

  data: () => ({
    
  }),
};
</script>
