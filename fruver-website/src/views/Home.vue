<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- Seccion Equipo - Desarrollada por David Fonseca -->
    <section class="seccion-equipo">
        <!-- Titulo de Seccion - Equipo -->
        <div>
            <h2 class="seccion-equipo_title">{{ title }}</h2>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MiembroEquipo from '@/components/MiembroEquipo.vue';
import miembrosData from '@/assets/resources/data.json';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MiembroEquipo
  },
  data() {
    return {
        projectName: 'Nuestro Equipo',
        group: 'Grupo 61',
        members: miembrosData.members,
    };
  },
  methods: {
    setMembers: function () {
        console.log(this.members);
    }
  },
  computed: {
    title() {
      return this.projectName + " - " + this.group;
    }
  },
  created() {
    if(this.members){
        this.setMembers();
    }
  },
};
</script>

<style scoped>
/* selectores */

/* // X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap */

.seccion-equipo {
    margin-top: 100px;
    margin-bottom: 140px;
}

.seccion-equipo_title{
    margin-bottom: 80px;
    text-align: center;
    font-size: 50px;
    font-family: 'Fredoka One', cursive;
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
    background-color: rgb(255, 255, 100);
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