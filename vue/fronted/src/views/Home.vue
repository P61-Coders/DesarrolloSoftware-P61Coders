<template>
  <div>
    <seccion-slider/>
    <seccion-articulos/>
    <seccion-equipo/>
    <seccion-noticias/>
  </div>
</template>

<script>
import seccionNoticias from '../components/SeccionNoticias.vue';
import SeccionArticulos from '../components/SeccionArticulos'; 
import SeccionSlider from '../components/SeccionSlider';
import SeccionEquipo from '../components/seccionEquipo/SeccionEquipo.vue';


  export default {
    name: 'Home',

    components: {
      SeccionArticulos,
      seccionNoticias,
      SeccionSlider,
      SeccionEquipo,        
    },
  }
</script>
