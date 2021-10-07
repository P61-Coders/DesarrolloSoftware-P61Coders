
<template>
<v-app>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="@/assets/images/cintaFrutasArriba.jpg"
      
     
      
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
           mdi-cancel
        </v-icon>Cerrar sesión
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="{name:'GestorUsuarios'}" >Usuarios</v-tab>
          <v-tab :to="{name:'GestorCategorias'}">Categorias</v-tab>
          <v-tab :to="{name:'GestorArticulos'}">Articulos</v-tab> 
          <v-tab :to="{name:'Home'}">Home</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
     
     
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >   
       
      <v-main>
           <router-view/>
      </v-main>  
           
      <v-container style="height: 1000px;">  
           <v-main>
           <router-view/>
            </v-main>
           
      </v-container>
      
      
      
    </v-sheet>
    
    
   

  </v-card>

  
</v-app>
</template>

<script>

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
        }
    }
}
</script>