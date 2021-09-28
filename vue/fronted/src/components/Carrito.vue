<template>
   
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list rounded>
      <v-subheader>REPORTS </v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in compras"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="'mdi-clock'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-card>
</template>

<script>
//   import{mapState} from "vuex";
  export default {
    props: ["compras"],

    // computed:{
    //     ...mapState(['listaCompra'])
    // },
    data: () => ({
      

      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-call-split' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
  }
</script>

