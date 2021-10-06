<template>
    <!-- Tarjeta -->
    <article 
        class="col-10 col-sm-5 col-xl-2 tarjeta-miembro-equipo">
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

.miembro-equipo_title{
    font-family: 'Fredoka One', cursive;
    text-align: center;
    font-size: 18px;
}

.miembro-equipo_par{
    font-family: 'Roboto', sans-serif;
    text-align: center;
}

@media (min-width: 1200px) {

    .miembro-equipo_img {
        background-position: top;
        height: 270px;
    }
}
</style>