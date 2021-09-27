<template>

    <div>
    <h2 class="seccion-articulos_titulo" >SECCIÓN ARTÍCULOS</h2>
      <h2 class="seccion-articulos_titulo-verduras">VERDURAS</h2>
      <p class="seccion-articulos_descripcion-verduras">
        Encuentra aquí las mejores verduras como: aguacate, tomate, lechuga y todas las demas.
        Clic para volver a la pagina principal 
        <v-btn color="primary" small v-on:click="irHome()" > IR  </v-btn>
      </p>

    <section class= "seccion-articulos">
        <article v-for="(item, index) in verduras" v-bind:key="index" class="seccion_verduras">
        <div class="verdura">
          <img class= "verdura_imagen" v-bind:src="item.imagen" alt="Verduras colombianas">
          <h3 class="verdura_nombre">{{item.nombre}}</h3>
          <h3 class="verdura_precio" >{{item.precio}} COP X Kilo</h3>
          <v-btn small color="primary" class="verdura_botoncompra">Añadir al carrito</v-btn>
        </div>
        
        
      </article>
    </section>
    </div>
</template>

<script>
export default {
    data: () => ({
        verduras:[{
            imagen:"images/verduras/aguatecate.jpg",
            nombre:"Aguacate",
            precio:2000
        },{
            imagen:"images/verduras/zanahoria.jpg",
            nombre:"Zanahoria",
            precio:3000
        },{
            imagen:"images/verduras/tomate.jpg",
            nombre:"Tomate",
            precio:1500
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

<style >
/* css para verduras*/
/* css para verduras*/
/* css para verduras*/
.seccion-articulos_titulo-verduras{
    border: 1px solid black;
    background-color: rgb(51, 179, 0);
    color:whitesmoke;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 1px;
    margin-top:5px;
}
.seccion-articulos_descripcion-verduras{
    margin-top: 5px;
}
.seccion-articulos_descripcion-verduras>a{
    text-decoration:underline;
    color: rgb(16, 82, 7)
}

.verdura_imagen{
    width: 200px;
    height:120px;
    border-radius: 10px;
}
.verdura_nombre{
    margin: 2px;
}
.verdura_precio{
    margin: 2px;
    color: rgb(3, 107, 15);
}
.verdura_botoncompra{
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
    margin-top: 5px;
}

.seccion_verduras{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-evenly;
}
.verdura{
    text-align:center;
    margin: 20px;
    background-color: rgb(226, 255, 245);
}

</style>