<template>
    <!-- Tarjeta -->
    <article class="row align-items-center tarjeta-articulo">
        <!-- Imagen -->
        <div 
            class="col-7 background-image"
            :style="{ 'backgroundImage': 'url(' + bgImg + ')' }"
        >
            <img
                class="articulo_imagen"
                :src="articulo.Image"
                :alt="articulo.Nombre"
            />
        </div>
        <!-- Body -->
        <div class="col-5 articulo-body">
            <!-- Titulo -->
            <h2 class="articulo-body_titulo">{{ articulo.Nombre }}</h2>
            <!-- Parrafo -->
            <p class="articulo-body_par">
                Click aquí para encontrar las mejores y todas las
                verduras de nuestro campo colombiano
            </p>
            <!-- Boton -->
            <router-link :to="{ name: articulo.Nombre }">
                <button-1 :name="buttonName"></button-1>
            </router-link>
        </div>
    </article>
</template>

<script>
import Button1 from '@/components/Button1';

export default {
    name: 'TarjetaArticulo',
    components: {    
        Button1,
    },
    props: {
        articulo: Object,
    },
    data(){
        return{
            buttonName : 'Mercar',
            bgImg: 'img/images/bg-tarjeta-articulos2.png',
        }
    },
}
</script>

<style scoped>
.tarjeta-articulo{
    margin-top: 90px;
    margin-bottom: 90px;
}

.background-image{
    background-size: contain;
    background-position: center;
    padding-left: 255px;
}

.articulo_imagen {
    height: 480px;
}

.articulo-body{
    align-items: start;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: 212529;
}

.articulo-body_titulo {
    color: #2b044d;
    font-size: 50px;
    font-family: 'Nunito', sans-serif;
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