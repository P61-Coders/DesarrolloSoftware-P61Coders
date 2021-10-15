<template>
    <!-- Tarjeta -->
    <article 
        class="col-10 col-sm-5 col-lg-3 col-xl-2 tarjeta-miembro-equipo">
        <div 
            class="row miembro-equipo_img"
            :style="{ 'backgroundImage': 'url(' + member.memberImage + ')' }">
        </div>
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

.miembro-equipo_body{

}

.miembro-equipo_title{
    color: #2b044d;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    font-size: 24px;
}

.miembro-equipo_par{
    color: #707b8e;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    text-align: center;
}
@media (min-width: 992px) {

    .miembro-equipo_par{
        font-size: 16px;
    }
}

@media (min-width: 1200px) {

    .miembro-equipo_img {
        background-position: top;
        height: 270px;
    }
}
</style>