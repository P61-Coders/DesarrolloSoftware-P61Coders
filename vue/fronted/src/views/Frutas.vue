<template>
  <div class="container seccion">
    <h2 class="seccion-articulos_titulo">SECCIÓN ARTÍCULOS</h2>
    <h2 class="seccion-articulos_titulo-frutas">FRUTAS</h2>
    <p class="seccion-articulos_descripcion-frutas">
      Encuentra aquí las mejores frutas como: gulupa, lulo, piña y todas las
      demas. Clic para volver a la pagina principal
      <v-btn color="primary" small v-on:click="irHome()"> IR </v-btn>
    </p>

    <section class="seccion-articulos">
      <article
        v-for="(item, index) in frutas"
        v-bind:key="index"
        class="seccion_frutas"
      >
        <div class="fruta">
          <img
            class="fruta_imagen"
            v-bind:src="item.imagen"
            alt="Frutas colombianas"
          />
          <h3 class="fruta_nombre">{{ item.nombre }}</h3>
          <h3 class="fruta_precio">{{ item.precio }} COP X Kilo</h3>
          <v-btn
            small
            color="primary"
            @click="agregarProductos(index)"
            class="fruta_botoncompra"
            >Añadir al carrito</v-btn
          >
        </div>
      </article>
    </section>
    <v-btn small color="primary" @click="irCarrito()" class="fruta_botoncompra"
      >ver el carrito</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["listaCompras"]),
  },
  data: () => ({
    // frutas:[{
    //     imagen:require('../assets/images/frutas/gulupa.jpg'),
    //     nombre:"Gulupa",
    //     precio:2000
    // },{
    //     imagen:require('../assets/images/frutas/sandia.jpg'),
    //     nombre:"Sandia",
    //     precio:3000
    // },{
    //     imagen:require("@/assets/images/frutas/lulo.jpg"),
    //     nombre:"Lulo",
    //     precio:1500
    // },
    // ],
    frutas: [],
  }),
  created() {
    this.list();
  },
  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/articulo/list")
        .then((response) => {
          let articulos = response.data;
          articulos.map((item) => {
            if (item.categoria.nombre === "FRUTAS") {
              this.frutas.push({
                nombre: item.nombre,
                precio: item.precioXkilo,
                imagen: require(`@/assets/images/frutas/${item.nombre}.jpg`),
              });
            }
          });
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },

    irHome() {
      this.$router.push("/");
    },
    irCarrito() {
      this.$router.push("/carrito");
    },
    agregarProductos(index) {
      this.listaCompras.push(this.frutas[index].nombre);
    },
  },
};
</script>

<style>
.seccion {
  padding-top: 200px;
  padding-bottom: 150px;
}

.banner {
  display: flex;
}
.banner > img {
  width: 50%;
}
.logo {
  background-color: rgb(225, 243, 236);
  display: flex;
  justify-content: center;
}

/*css frutas*/
/*css frutas*/
/*css frutas*/
.seccion-articulos_titulo {
  border: 1px solid black;
  background-color: rgb(255, 225, 0);
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 5px;
}

.seccion-articulos_titulo-frutas {
  border: 1px solid black;
  background-color: rgb(252, 30, 104);
  color: whitesmoke;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 1px;
  margin-top: 5px;
}
.seccion-articulos_descripcion-frutas {
  margin-top: 5px;
}
.seccion-articulos_descripcion-frutas > a {
  text-decoration: underline;
  color: rgb(121, 1, 1);
}
.fruta_imagen {
  width: 200px;
  height: 120px;
  border-radius: 10px;
}
.fruta_nombre {
  margin: 2px;
}
.fruta_precio {
  margin: 2px;
  color: rgb(230, 16, 87);
}
.fruta_botoncompra {
  background-color: rgb(238, 238, 238);
  border-radius: 10px;
  margin-top: 5px;
}

.seccion_frutas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.fruta {
  text-align: center;
  margin: 20px;
  background-color: rgb(250, 216, 242);
}
</style>
