<template>
        <li class="nav-item link-menu-1">
            <router-link 
                class="nav-link link-title" 
                :to="link"
            >{{ title }}</router-link>
        </li>
</template>
<script>
export default {
    data() {
       return{
           
       } 
    },
    props:{
        link: Object,
        title: String,
    }
}
</script>
<style scoped>
.link-title {
    color: #450b78;
}

.link-title:hover {
    font-weight: bold;
}

</style>