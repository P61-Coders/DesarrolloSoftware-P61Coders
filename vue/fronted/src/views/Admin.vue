
<template>
 <v-app>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Gestor Administrativo</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        color="grey lighten-1"
        dark
        @click="salir()"
      >
        <v-icon
          dark
          left
        >
           mdi-logout
        </v-icon>Logout
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="{name:'GestorUsuarios'}" v-if='isAdmin()' >Usuarios</v-tab>
          <v-tab :to="{name:'GestorCategorias'}">Categorías</v-tab>
          <v-tab :to="{name:'GestorArticulos'}">Artículos</v-tab> 
          <v-tab exact :to="{name:'Home'}">Home</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card> 
    
  <v-main>
      <router-view/>
  </v-main>
 </v-app>
  

</template>

<script>
import decode from 'jwt-decode'

export default {
    name: 'Admin',
    data:()=>  ({
        
    }),

    methods: {
      salir(){
        localStorage.removeItem('token');
        this.$router.push({
            name:'Login'
            })
        },
      isAdmin(){
        let token= localStorage.getItem('token');
        let decodificar = decode(token);
        let rol = decodificar.rol;
        return rol === 'gestor'? false:true;

      }
    }
}
</script>