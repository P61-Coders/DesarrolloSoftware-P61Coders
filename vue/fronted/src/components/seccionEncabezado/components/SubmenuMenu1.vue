<template>
        
    <v-menu
      offset-y
      left
      nudge-bottom="14"
      min-width="150"
      content-class="user-profile-menu-content"
    >
      <template v-slot:activator="{ on, attrs }">
        <li class="nav-item link-menu-1 link-title" 
            v-bind="attrs"
            v-on="on"
        >
            {{ title }}
        </li>
      </template>

      <v-list>
        <!-- Frutas -->
        <v-list-item :to="{ name: 'Frutas' }">
          <v-list-item-content>
            <v-list-item-title> Frutas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <!-- Verduras -->
        <v-list-item :to="{ name: 'Verduras' }">
          <v-list-item-content>
            <v-list-item-title> Verduras </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <!-- Exoticas -->
        <v-list-item :to="{ name: 'Exoticas' }">
          <v-list-item-content>
            <v-list-item-title> Exoticas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
</template>
<script>
export default {
    data() {
       return{
           
       }
    },
    props:{
        title: String,
    }
}
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
</style>

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