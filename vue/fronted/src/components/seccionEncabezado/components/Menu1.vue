<template>
    <!-- Main-menu -->
    <ul class="nav d-flex align-items-center">    
        <link-menu-1
            class="menu1"
            v-for="link in linksMenu" :key="link.name"
            :link="link"
            :title="link.name">
        </link-menu-1>
        <li class="nav-item dropdown link-menu-1"><router-link class="nav-link dropdown-toggle link-title" role="button" data-bs-toggle="dropdown" :to="{name: 'Home'}">Tienda</router-link>
            <ul class="dropdown-menu">
                <li class="dropdown-item"><a href="blog.html">Frutas</a></li>
                <li class="dropdown-item"><a href="single-blog.html">Verduras</a></li>
            </ul>
        </li>
        <li class="nav-item link-menu-1">
            <router-link class="nav-link" :to="{name: 'Login'}" v-if="!isLogged">
                <button-1 :name="buttonName"></button-1>
            </router-link>
            <!-- <router-link class="nav-link link-title" :to="{name: 'Admin'}" v-else>Admin</router-link> -->
            <user-menu v-else>
            </user-menu>
        </li>
    </ul>
</template>
<script>
import Button1 from '@/components/Button1.vue';
import LinkMenu1 from './LinkMenu1.vue';
import UserMenu from './UserMenu.vue';

export default {
    components: {    
        Button1,
        LinkMenu1,
        UserMenu,
    },
    data() {
        return {
            buttonName: 'Log In',
            linksMenu: [
                {name: 'Home'},
                {name: 'Nosotros'},
                {name: 'Calendario'},
            ],
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
    font-family: 'Poppins', sans-serif;
}

.link-title {
    color: #450b78;
}

.link-title:hover {
    font-weight: bold;
}
</style>

