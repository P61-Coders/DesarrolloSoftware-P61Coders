<template>
    <!-- Tarjeta -->
    <article class="col-10 col-sm-5 col-lg-2 tarjeta-miembro-equipo">
        <!-- Background Imagen Tarjeta-->
        <div 
            class="row miembro-equipo_img"
            :style="{ 'backgroundImage': 'url(' + member.memberImage + ')' }">
        </div>
        <!-- Body Tarjeta -->
        <div class="row miembro-equipo_body">
            <h3 class="miembro-equipo_title">{{ member.memberName }}</h3>
            <p class="miembro-equipo_par">
                <b>{{ member.memberTitle }}</b>
                {{ member.memberDetails }}
            </p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'MiembroEquipo',
    props: {
        member: Object,
        id: Number
    },
    data(){
        return{
            text : '',
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.miembro-equipo_img {
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-bottom: 30px;
    height: 320px;
}

.miembro-equipo_title{
    color: #2b044d;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    font-size: 20px;
}

.miembro-equipo_par{
    color: #707b8e;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    text-align: center;
}

@media (min-width: 992px) {

    .miembro-equipo_img {
        background-position: top;
        height: 200px;
    }

}

@media (min-width: 1200px) {
    
    .miembro-equipo_img {
        background-position: top;
        height: 270px;
    }

    .miembro-equipo_par{
        font-size: 14px;
    }
}
</style>