<template>

     <!-- Seccion Slider - Desarrollada por David Fonseca -->
    <section class="seccion-slider">
        <div class="container">
            <div class="row d-flex align-items-center">
                <!-- Body de Seccion - Slider -->
                <div class="col-lg-6 col-md-9">
                    <div class="hero_caption">
                        <span>Vivelo con Nosotros</span>
                        <h1>Mercar hecho facil<br>con Fruver</h1>
                        <p>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
                        <!-- Boton -->
                        <div>
                            <router-link :to="{name: 'Frutas'}">
                                <button-2 class="boton" :name="buttonName" ></button-2>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- Imagen de Seccion - Slider -->
                <div class="col-lg-6">
                    <div class="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                        <img class="hero_img" src="@/assets/images/Image-hero.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section> 

</template>
<script>
import Button2 from './Button2.vue';

export default {
    components: {    
        Button2,
    },
    data() {
        return {
            buttonName: 'Mercar Ahora',
        };
    },
}
</script>
<style scoped>
.seccion-slider{
    margin-top: 90px;
    background-color: #F4FEFF;
    padding-top: 10px;
}

.hero_caption{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: 212529;
}

.boton{
    margin-top: 15px;
}

h1{
    padding-top: 20px;
    color: #2b044d;
    font-family: 'Nunito', sans-serif;
    font-size: 64px;
}

p{
   color: #707b8e;
   max-width: 410px;
   line-height: 1.8;
}

.hero_img{
    padding-left: 30px;
    padding-top: 50px;
}

</style>