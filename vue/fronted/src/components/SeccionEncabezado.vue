<template >
    <v-container >
    <router-link :to="{name:'Login'
    }"> Login</router-link>

    <router-link :to="{ name:'Admin'
    }"> Admin</router-link>
    </v-container>
    
</template>

<script>
export default {
    name: "Encabezado",

}
</script>