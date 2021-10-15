<template>
  <v-div>
    <seccion-slider/>
    <seccion-noticias/>
    <seccion-articulos/>
  </v-div>
</template>

<script>
  import seccionNoticias from '../components/SeccionNoticias.vue';
  import SeccionArticulos from '../components/SeccionArticulos'; 
  import SeccionSlider from '../components/SeccionSlider'; 

  export default {
    name: 'Home',

    components: {
      SeccionArticulos,
      seccionNoticias,
      SeccionSlider,        
    },
  }
</script>
