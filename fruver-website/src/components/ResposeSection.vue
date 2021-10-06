<template>
    <!-- Response Section - Movie -->
    <section class="pelicula-section">
        <article id="pelicula" class="row">
            <div class="col">
                <!-- imagen -->
                <img id="imagenPelicula" :src="movie.Poster" alt="">
            </div>
            <div class="col">
                <!-- titulo -->
                <h1 id="tituloPelicula">{{ movie.Title }}</h1>
                <!-- descripcion -->
                <p id="plotPelicula">{{ movie.Plot }}</p>
                <!-- actores -->
                <p id="actoresPelicula">{{ movie.Actors }}</p>
                <!-- director -->
                <p id="directorPelicula">{{ movie.Director }}</p>
                <!-- ano -->
                <p id="yearPelicula">{{ movie.Year }}</p>
                <!-- enlace -> id -->
                <!-- <a id="enlacePelicula" href="link"></a> -->
            </div>
        </article>
    </section>
</template>

<script>
export default {
    name: 'ResponseSection',
    props: {
        movie: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.pelicula-section{
    margin-top: 50px;
}
</style>