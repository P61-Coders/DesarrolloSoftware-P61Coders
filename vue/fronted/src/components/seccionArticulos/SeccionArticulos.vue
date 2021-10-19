<template>
    <!-- Seccion Articulos - Desarrollada por David Fonseca -->
        <section class="container seccion-articulos">
            <!-- Seccion de Verduras - Articulos -->
            <!-- v-for="(articulo, id) in categorias" :key="articulo._id" -->
            <tarjeta-articulo
                :articulo="categorias[1]"
            ></tarjeta-articulo>
            <tarjeta-articulo-2
                :articulo="categorias[0]"
            ></tarjeta-articulo-2>      
        </section>
</template>
<script>
import axios from "axios";
import Button2 from '../Button2.vue';
import TarjetaArticulo from './components/TarjetaArticulo.vue';
import TarjetaArticulo2 from './components/TarjetaArticulo2.vue';

export default {
  name: "SeccionArticulos",
  components: {    
        Button2,
        TarjetaArticulo,
        TarjetaArticulo2,
    },
  data() {
      return {
          categorias: [],
      }
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      //nota: no usar arraylist aca
      axios
        .get("https://fruver-frontend-grupo-1.herokuapp.com/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
          console.log(this.categorias);
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    irFrutas() {
      this.$router.push("/frutas");
    },
    irVerduras() {
      this.$router.push("/verduras");
    },
    irExoticas() {
      this.$router.push("/exoticas");
    },
  },
};
</script>
<style scoped>
.seccion-articulos {
    background-color: #FFFFFF;
    padding-top: 20px;
}
</style>