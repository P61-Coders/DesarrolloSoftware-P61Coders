<template>


  <div>
    <!-- Seccion Carousel - Desarrollada por David Fonseca -->
    <Header></Header>

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
  import HelloWorld from '../components/HelloWorld';
  import MiembroEquipo from '../components/MiembroEquipo.vue';
  import membersData from '../assets/resources/data.json';
  import Header from '../components/Header.vue';

  export default {
    name: 'Home',
    data() {
      return {
        title: 'Nuestro Equipo',
        members: membersData.members,
      }
      },
    components: {
      HelloWorld,
      MiembroEquipo,
      Header,
    },
    methods: {

    },


  }
</script>

<style scoped>
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
</style>