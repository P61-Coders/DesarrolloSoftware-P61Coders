<template >
  <v-app-bar color="white" flat dense prominent>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="2">
          <a href="http://localhost:8080/">
            <img
              class="nav_logo"
              src="../assets/fruver-logo.png"
              alt="Fruver"
            />
            <v-app-bar-title>Fruver</v-app-bar-title>
          </a>
        </v-col>

        <v-col id="nav" cols="8">
          <router-link :to="{ name: 'Home' }">Home</router-link> |

<<<<<<< HEAD
          <v-menu>
            <template v-slot:activator="{ on: menu, attrs }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn plain v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                    Tienda
                  </v-btn>
                </template>
                <span>Im A ToolTip</span>
              </v-tooltip>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
=======
    <div id="nav">
      <router-link :to="{ name: 'Admin' }">Admin</router-link> |
      <router-link :to="{ name: 'Calendario' }">Calendario de Ofertas</router-link>
>>>>>>> 0298c832fbf27d26c18b8aa4f6334ca3adf88462

          <router-link :to="{ name: 'Tienda' }">Tienda</router-link> |

<<<<<<< HEAD
          <router-link :to="{ name: 'Nosotros' }">Nosotros</router-link>
        </v-col>

        <v-col cols="2">
          <v-btn icon :to="{ name: 'Login' }">
            <v-icon>mdi-account</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
=======
      <!-- <router-link :to="{ name: 'Tienda' }">Tienda</router-link> | -->

      
    </div>

    <v-spacer></v-spacer>

    <div>
      <v-btn icon :to="{ name: 'Login' }">
          <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'Carrito' }">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </div>
>>>>>>> 0298c832fbf27d26c18b8aa4f6334ca3adf88462
  </v-app-bar>
</template>

<script>
export default {
  name: "Encabezado",
  data: () => ({
    items: [
      { title: "Click Me1" },
      { title: "Click Me2" },
      { title: "Click Me3" },
      { title: "Click Me4" },
    ],
  }),
};
</script>

<style scoped>
.nav_logo {
  height: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  color: blue;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>