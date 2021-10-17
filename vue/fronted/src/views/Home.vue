<template>
  <div>
    <seccion-slider/>
    <seccion-articulos/>
    <seccion-equipo/>
  </div>
</template>

<script>
import SeccionSlider from '../components/SeccionSlider';
import SeccionArticulos from '../components/seccionArticulos/SeccionArticulos.vue';
import SeccionEquipo from '../components/seccionEquipo/SeccionEquipo.vue';


  export default {
    name: 'Home',
    components: {
      SeccionSlider,
      SeccionArticulos,
      SeccionEquipo,        
    },
  }
</script>
