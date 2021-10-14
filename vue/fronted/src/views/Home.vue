<template>
  <v-div>
  <hello-world />
  <seccion-articulos/>
  <seccion-noticias/>
  </v-div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import seccionNoticias from '../components/SeccionNoticias.vue';
  import SeccionArticulos from '../components/SeccionArticulos'; 
  



  export default {
    name: 'Home',

    components: {
      HelloWorld,
      SeccionArticulos,
      seccionNoticias
        
    },
  }
</script>
