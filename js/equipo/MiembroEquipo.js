Vue.component('MiembroEquipo', {
    props: {
        member: Object,
        id: Number
    },
    template: `
        <!-- Tarjeta -->
        <article 
            class="col-10 col-sm-5 col-xl-2 tarjeta-miembro-equipo" 
            >
            <div 
                class="row miembro-equipo_img" 
                :key="member.memberId"
                :style="{ backgroundImage: member.memberImage }">
            </div>
            <div class="row miembro-equipo_body">
                <h3 class="miembro-equipo_title">{{ member.memberName }}</h3>
                <p class="miembro-equipo_par">
                    <b>{{ member.memberTitle }}</b>
                    {{ member.memberDetails }}
                </p>
            </div>
        </article>
        `,
        data(){
            return{
                
        }
    },
    methods: {
        
    }, 
})