<template>
  <div class="text-center container seccion">
    <v-card class="mx-auto" max-width="300" tile>
      <v-list rounded>
        <v-subheader>REPORTS CARRITO DE COMPRAS </v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in listaCompras" :key="i">
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
    <v-btn color="primary" small @click="irHome()"> Ir pagina principal </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["listaCompras"]),
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-call-split" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),

  methods: {
    irHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.seccion {
  padding-top: 150px;
  padding-bottom: 150px;
}
</style>
