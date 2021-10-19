<template>
    <!-- Tarjeta -->
    <article class="row align-items-center tarjeta-articulo background-image"
        :style="{ 'backgroundImage': 'url(' + bgImg + ')' }">
        <!-- Body -->
        <div class="col-5 text-right articulo-body">
            <!-- Titulo -->
            <h2 class="articulo-body_titulo">{{ articulo.Nombre }}</h2>
            <!-- Parrafo -->
            <p class="articulo-body_par">
                Click aquí para encontrar las mejores y todas las
                verduras de nuestro campo colombiano
            </p>
            <!-- Boton -->
            <router-link :to="{ name: articulo.Nombre }">
                <button-2 :name="buttonName"></button-2>
            </router-link>
        </div>
        <!-- Imagen -->
        <div class="col-7 col-img">
            <img
                class="articulo_imagen"
                :src="articulo.Image"
                :alt="articulo.Nombre"
            />
        </div>
    </article>
</template>

<script>
import Button2 from '@/components/Button2.vue';

export default {
    name: 'TarjetaArticulo2',
    components: {    
        Button2,
    },
    props: {
        articulo: Object,
    },
    data(){
        return{
            buttonName : 'Mercar',
            bgImg: 'img/images/bg-tarjeta-articulos.png',
        }
    },
}
</script>

<style scoped>
.tarjeta-articulo{
    margin-top: 50px;
    margin-bottom: 80px;
    padding-top: 100px;
    padding-bottom: 100px;
}

.background-image{
    background-size: contain;
    background-position: right;
}

.col-img{
    padding-left: 200px;
}

.articulo_imagen {
    height: 250px;
}

.articulo-body_titulo {
    color: #2b044d;
    font-size: 50px;
    font-family: 'Nunito', sans-serif;
    margin-top: 50px;
}

.articulo-body_par {
    color: #707b8e;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}
@media (min-width: 992px) {


}

@media (min-width: 1200px) {

    
}
</style>