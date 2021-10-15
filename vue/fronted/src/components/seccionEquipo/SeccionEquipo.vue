<template>

    <!-- Seccion Equipo - Desarrollada por David Fonseca -->
    <section class="seccion-equipo">
        <!-- Titulo de Seccion - Equipo -->
        <div>
            <h2 class="seccion-equipo_title">Nuestro Equipo<br>Grupo 61</h2>
        </div>
        <!-- Seccion de tarjetas - Equipo --> 
        <div class="row justify-content-center seccion-equipo_body">
            <miembro-equipo
                v-for="(member, id) in members" :key="member.memberId"
                :member="member"
                :index="id"
            ></miembro-equipo>
        </div>
    </section>
  
</template>

<script>
import MiembroEquipo from './components/MiembroEquipo.vue';
import miembrosData from '@/assets/data/dataMiembros.json';

export default {
  components: {    
    MiembroEquipo
  },
  data() {
    return {
        members: miembrosData.members,
    };
  },
  methods: {
    setMembers: function () {
        console.log(this.members);
    }
  },
  computed: {

  },
  created() {
    if(this.members){
        this.setMembers();
    }
  },
};
</script>

<style scoped>
.seccion-equipo {
    margin-top: 100px;
    margin-bottom: 140px;
    background-color: #F4FEFF;
    padding-top: 150px;
    padding-bottom: 150px;
}

.seccion-equipo_title{
    margin-bottom: 80px;
    text-align: center;
    color: #2b044d;
    font-size: 50px;
    font-family: 'Nunito', sans-serif;
}

.tarjeta-miembro-equipo {
    -webkit-transition: -webkit-transform 1s linear;
    -moz-transition: -moz-transform 1s linear;
    -o-transition: -o-transform 1s linear;
    -ms-transition: -ms-transform 1s linear;
    transition: transform 0.5s linear;
}

.tarjeta-miembro-equipo:hover {
    -webkit-transform: scale(2, 2);
    -moz-transform: translate(2px, 1px);
    -o-transform: translate(2px, 1px);
    -ms-transform: translate(2px, 1px);
    transform: scale(1.05, 1.05);
}

.tarjeta-miembro-equipo {
    margin: 10px;
    margin-bottom: 20px;
    height: 450px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    background-color: #FFFFFF;
}


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 751px) {

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .tarjeta-miembro-equipo {
        height: 430px;
    }

}

/* // XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
    .tarjeta-miembro-equipo {
        height: 410px;
    }
}
</style> 