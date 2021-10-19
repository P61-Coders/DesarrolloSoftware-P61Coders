<template>
    <!-- Seccion Footer - Desarrollada por David Fonseca -->
    <section class="seccion-footer">
        <!-- Footer Start-->
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-4 col-md-4 col-sm-8">
                    <!-- logo -->
                    <router-link class="row footer-logo" :to="{ name: 'Home' }">
                        Fruver
                    </router-link>
                </div>
                <!-- Form -->
                <div class="col-lg-8 col-md-4 col-sm-8 form-footer">
                    <formulario-suscribirse/>
                </div>
            </div>
            <hr>

                            
            <div class="row">
                <a 
                    class="col-8 row footer-repo" 
                    href="https://github.com/P61-Coders/DesarrolloSoftware-P61Coders.git"
                    target="_blank"
                >Repo Github https://github.com/P61-Coders/DesarrolloSoftware-P61Coders.git</a>
                <h6 class="col-4 text-end">Desarrollado por David Fonseca</h6>
            </div>
        </div>
    </section>
</template>

<script>
import FormularioSuscribirse from './FormularioSuscribirse.vue';

export default {
    components: {
        FormularioSuscribirse,
    },
    data() {
        return {

        };
    },
};
</script>

<style scoped>
.seccion-footer {
  padding-top: 150px;
  padding-bottom: 80px;
}

.footer-repo {
  text-decoration: none;
  color: #707b8e;
  font-family: "Poppins", sans-serif;
  padding-left: 35px;
}

.footer-logo {
    text-decoration: none;
    color: #2b044d;
    font-family: "Nunito", sans-serif;
    font-size: 40px;
    padding-left: 35px;
}

.form-footer {
    align-content: center;
}

.text-end {
    color: #707b8e;
    font-family: "Poppins", sans-serif;
}

</style>