<template>
    <v-container>
        <h2 class="seccion-articulos_titulo" >SECCIÓN SERVICIOS</h2>
        <section class= "seccion-articulos">
        <article class="frutas">
        <h2 class="frutas_titulo">{{servicio1.nombre}}</h2>
        <img class= "frutas_imagen" v-bind:src="servicio1.imagen" alt="Frutas colombianas">
        <p class="frutas_descripcion">
          Clic aquí para encontrar las mejores y todas las<br>
          <a href="frutas.html" target = "_blank" >Frutas de nuestro campo colombiano </a>   
        </p>
        </article>

        <article class="verduras">
        <h2 class="verduras_titulo">{{servicio2.nombre}}</h2>
        <img class= "verduras_imagen" v-bind:src="servicio2.imagen" alt="Verduras colombianas">
        <p class="verduras_descripcion">
          Clic aquí para encontrar las mejores y todas las<br>
          <a href="verduras.html" target = "_blank" >Verduras de nuestro campo Colombiano </a>
        </p>
      </article>

      <article class="otros">
        <h2 class="otros_titulo">{{servicio3.nombre}}</h2>
        <img class= "otros_imagen" v-bind:src="servicio3.imagen" alt="exoticos colombianas">
        <p class="otros_descripcion">
          Clic aquí para encontrar las mejores <br>
          <a href="exoticas.html" target = "_blank" >Frutas y verduras exóticas y/o orgánicas  </a>
          
        </p>
      </article>
        </section>
    </v-container>
</template>


<script>
export default {
    data: () => ({
        servicio1:
        {nombre:"Frutas",imagen:"images/frutas.jpg"},
        servicio2:
        {nombre:"Verduras",imagen:"images/verduras.jpg"},
        servicio3: 
        {nombre:"Exóticos",imagen:"images/exoticas.jpg"}
    
  }),


}
</script>

<style>
    .seccion-articulos_titulo{
    border: 1px solid black;
    background-color: rgb(255, 225, 0);
    padding: 8px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
}

.frutas_titulo{
    border: 1px solid black;
    background-color: rgb(252, 30, 104);
    color:whitesmoke;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 10px;  
}

.verduras_titulo{
    border: 1px solid black;
    background-color: rgb(51, 179, 0);
    color:whitesmoke;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 10px;

}
.otros_titulo{
    border: 1px solid black;
    background-color: rgb(40, 79, 206);
    color:whitesmoke;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 10px;
}

.frutas_imagen{
    width: 380px;
    height: 240px;
    border-radius: 10px;
}

.verduras_imagen{
    width: 380px;
    height: 240px;
    border-radius: 10px;
}
.otros_imagen{
    width: 380px;
    height: 240px;
    border-radius: 10px;
}

.seccion-articulos{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
}

.frutas_descripcion>a{
    color: rgb(124, 0, 0);
    
}
.frutas_descripcion{
    margin-top: 5px;
    text-align:center;
    
}
.verduras_descripcion>a{
    color: rgb(27, 75, 0);
    
}
.verduras_descripcion{
    margin-top: 5px;
    text-align:center;
    
}

.otros_descripcion>a{
    color: rgb(24, 5, 143);
    
    
}
.otros_descripcion{
    margin-top: 5px;
    text-align:center;
    
}

</style>