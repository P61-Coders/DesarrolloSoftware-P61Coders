<template>
  <!-- Main-menu -->
  <ul class="nav align-items-center">
    <link-menu-1
      v-for="link in linksMenu"
      :key="link.name"
      :link="link"
      :title="link.name"
    >
    </link-menu-1>
    
    <submenu-menu-1
        :title="submenu.name"
    >
    </submenu-menu-1>

    <li class="nav-item link-menu-1 user-btn">
      <router-link class="nav-link" :to="{ name: 'Login' }" v-if="!isLogged">
        <button-1 :name="buttonName"></button-1>
      </router-link>
      <user-menu v-else></user-menu>
    </li>
  </ul>
</template>
<script>
import LinkMenu1 from "./LinkMenu1.vue";
import SubmenuMenu1 from "./SubmenuMenu1.vue";
import Button1 from "@/components/Button1.vue";
import UserMenu from "./UserMenu.vue";

export default {
  components: {
    LinkMenu1,
    SubmenuMenu1,
    Button1,
    UserMenu,
  },
  data() {
    return {
      buttonName: "Log In",
      linksMenu: [
        { name: "Home" },
        { name: "Nosotros" },
        { name: "Calendario" },
      ],
      submenu: {
          name: "Tienda",
      }
    };
  },
  computed: {
    isLogged() {
      return localStorage.getItem("token");
    },
  },
};
</script>
<style scoped>
.link-menu-1 {
  margin: 7px;
  font-family: "Poppins", sans-serif;
}

.link-title {
  color: #450b78;
}

.link-title:hover {
  font-weight: bold;
}

.user-btn {
  min-width: 150px;
}

</style>

