<template>
  <v-menu
    offset-y
    left
    nudge-bottom="14"
    min-width="230"
    content-class="user-profile-menu-content"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        bottom
        color="success"
        overlap
        offset-x="12"
        offset-y="12"
        class="ms-4"
        dot
      >
        <v-avatar size="40px" v-bind="attrs" v-on="on">
          <v-img :src="require('@/assets/avatars/1.png')"></v-img>
        </v-avatar>
      </v-badge>
    </template>

    <v-list>
      <div class="pb-3 pt-2">
        <v-badge
          bottom
          color="success"
          overlap
          offset-x="12"
          offset-y="12"
          class="ms-4"
          dot
        >
          <v-avatar size="40px">
            <v-img :src="require('@/assets/avatars/1.png')"></v-img>
          </v-avatar>
        </v-badge>
        <div
          class="d-inline-flex flex-column justify-center ms-3"
          style="vertical-align: middle"
        >
          <span class="text--primary font-weight-semibold mb-n1">
            John Doe
          </span>
          <small class="text--disabled text-capitalize">Admin</small>
        </div>
      </div>

      <v-divider></v-divider>

      <!-- Dashboard -->
      <v-list-item :to="{ name: 'Admin' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
                {{ icons.mdiAccountOutline }}
            </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
              Dashboard
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <!-- Articulos -->
      <v-list-item :to="{ name: 'GestorArticulos' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiImageOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
              Articulos
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Categorias -->
      <v-list-item :to="{ name: 'GestorCategorias' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiImageMultipleOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
              Categorias
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Usuarios -->
      <v-list-item :to="{ name: 'GestorUsuarios' }" v-if="isAdmin()">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiAccountMultipleOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
              Usuarios
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <!-- Logout -->
      <v-list-item @click="salir()">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiLogoutVariant }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
  </v-menu>
</template>

<script>
import decode from 'jwt-decode'
import {
  mdiAccountOutline,
  mdiImageOutline,
  mdiImageMultipleOutline,
  mdiAccountMultipleOutline,
  mdiLogoutVariant,
} from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        mdiAccountOutline,
        mdiImageOutline,
        mdiImageMultipleOutline,
        mdiAccountMultipleOutline,
        mdiLogoutVariant,
      },
    };
  },
  methods: {
    salir(){
      localStorage.removeItem('token');
      this.$router.push({
          name:'Login'
          })
      },
      isAdmin(){
        let token = localStorage.getItem('token');
        let decodificar = decode(token);
        let rol = decodificar.rol;
        console.log(rol);
        return rol === 'administrador'? true : false;
      },
    },
};
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
</style>
