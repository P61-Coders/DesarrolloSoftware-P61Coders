<template>
  <v-app>
    
    <navigation-bar/>

    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
  },
  data() {
    return{

    }
  }
};
</script>
