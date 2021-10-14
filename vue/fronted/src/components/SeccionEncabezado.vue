<template >
  <v-app-bar color="white" flat dense prominent>
    <div>
      <a href="http://localhost:8080/">
        <img class="nav_logo" src="../assets/fruver-logo.png" alt="Fruver">
        <n-app-title>Fruver</n-app-title>
      </a>
    </div>

    <v-spacer></v-spacer>

    <div id="nav">
      <router-link :to="{ name: 'Admin' }">Admin</router-link> |
      <router-link :to="{ name: 'Calendario' }">Calendario de Ofertas</router-link>

      <div class="text-center">
        <v-menu>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  plain
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                >
                  Tienda
                </v-btn>
              </template>
              <span>Im A ToolTip</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

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
  </v-app-bar>
</template>

<script>
export default {
  name: "Encabezado",
  data: () => ({
      items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
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