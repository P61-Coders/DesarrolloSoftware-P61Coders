<template>
  <div>
  <hello-world />
  <seccion-articulos/>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import SeccionArticulos from '../components/SeccionArticulos'; 
  



  export default {
    name: 'Home',

    components: {
      HelloWorld,
      SeccionArticulos
        
    },
  }
</script>
