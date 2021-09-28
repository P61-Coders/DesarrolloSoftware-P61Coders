
<template>
    <div>
    
    <h2 class="seccion-articulos_titulo" >SECCIÓN ARTÍCULOS</h2>
    <h2 class="seccion-articulos_titulo-exoticas">PRODUCTOS EXÓTICOS - ORGÁNICOS</h2>
      <p class="seccion-articulos_descripcion-exoticas">
        Encuentra aquí las mejores frutas orgánicas y/o exóticas.
        Clic para volver a la pagina principal  
        <v-btn color="primary" small v-on:click="irHome()" > IR  </v-btn>
    </p>

    <section class= "seccion-articulos">
      <article v-for="(item, index) in exoticas" v-bind:key="index" class="seccion_frutas">
        <div class="exotica">
          <img class= "exotica_imagen" v-bind:src="item.imagen" alt="exoticas colombianas">
          <h3 class="exotica_nombre">{{item.nombre}}</h3>
          <h3 class="exotica_precio" > {{item.precio}} COP X Kilo</h3>
          <v-btn small color="primary" class="exotica_botoncompra">Añadir al carrito</v-btn>
        </div>

      </article>

      
    </section>
    
    </div>
</template>

<script>
export default {
    data: () => ({
        exoticas:[{
            imagen:require("../assets/images/exoticas/pitaya.jpg"),
            nombre:"Pitaya",
            precio:3000
        },{
            imagen:require("../assets/images/exoticas/uchuva.jpg"),
            nombre:"Uchuva",
            precio:4000
        },{
            imagen:require("../assets/images/exoticas/borojo.jpg"),
            nombre:"Borojo",
            precio:3500
        },
        ]
    
  }),
  methods: {
      irHome(){
          this.$router.push("/")
      }
    }
}
</script>


<style>
/* css para exoticas*/
/* css para exoticas*/
/* css para exoticas*/
.seccion-articulos_titulo-exoticas{
    border: 1px solid black;
    background-color: rgb(10, 125, 140);
    color:whitesmoke;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 1px;
    margin-top:5px;
}
.seccion-articulos_descripcion-exoticas{
    margin-top: 5px;
}
.seccion-articulos_descripcion-exoticas>a{
    text-decoration:underline;
    color: rgb(3, 11, 28)
}

.exotica_imagen{
    width: 200px;
    height:120px;
    border-radius: 10px;
}
.exotica_nombre{
    margin: 2px;
}
.exotica_precio{
    margin: 2px;
    color: rgb(3, 71, 107);
}
.exotica_botoncompra{
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
    margin-top: 5px;
}

.seccion_exoticas{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-evenly;
}
.exotica{
    text-align:center;
    margin: 20px;
    background-color: rgb(226, 255, 245);
}

</style>