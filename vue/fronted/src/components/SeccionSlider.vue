<template>
    <!-- Slider Area Start-->
    <div class="slider-area">
        <div class="slider-active">
            <div class="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-6 col-md-9 ">
                            <div class="hero__caption">
                                <span data-animation="fadeInUp" data-delay=".4s">VIVELO CON NOSOTROS</span>
                                <h1 data-animation="fadeInUp" data-delay=".6s">Mercar hecho facil<br>con Fruver</h1>
                                <p data-animation="fadeInUp" data-delay=".8s">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
                                <!-- Slider btn -->
                                <div class="slider-btns">
                                    <!-- Hero-btn -->
                                    <router-link class="nav-link" :to="{name: 'Login'}">
                                        <button-2 data-animation="fadeInLeft" data-delay="1.0s" :name="buttonName"></button-2>
                                    </router-link>
                                    <!-- Video Btn -->
                                    <a data-animation="fadeInRight" data-delay="1.0s" class="popup-video video-btn ani-btn" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><i class="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                                <img src="assets/img/hero/hero_right.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <!-- <div class="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-6 col-md-9 ">
                            <div class="hero__caption">
                                <span data-animation="fadeInUp" data-delay=".4s">App Landing Page</span>
                                <h1 data-animation="fadeInUp" data-delay=".6s">Get things done<br>with Appco</h1>
                                <p data-animation="fadeInUp" data-delay=".8s">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p> -->
                                <!-- Slider btn -->
                                <!-- <div class="slider-btns"> -->
                                    <!-- Hero-btn -->
                                    
                                    <!-- <a data-animation="fadeInLeft" data-delay="1.0s" href="industries.html" class="btn radius-btn">Download</a> -->
                                    <!-- Video Btn -->
                                    <!-- <a data-animation="fadeInRight" data-delay="1.0s" class="popup-video video-btn ani-btn" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><i class="fas fa-play"></i></a> -->
                                <!-- </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                                <img src="assets/img/hero/hero_right.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>  -->
        </div>
    </div>
    <!-- Slider Area End -->
    
</template>

<script>
import Button2 from './Button2.vue';

export default {
    name: "SeccionSlider",
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
.slider-area{
    background-color: #F4FEFF;
    padding-top: 150px;
    padding-bottom: 150px;
}

.hero__caption{
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: 212529;
}

h1{
    padding-top: 20px;
    color: #2b044d;
    font-family: 'Nunito', sans-serif;
    font-size: 65px;

}

p{
   color: #707b8e;
   max-width: 410px;
   line-height: 1.8;
}
</style>