var appSeccionEquipo = new Vue({
    el: '#app-seccion-equipo',
    data: {
        title: 'Nuestro Equipo',
        members: []
    },
    methods: {
        loadMembers: async function (){
            let url = './resources/data.json';
            const responseText = await fetch(url, {method: 'GET'});
            const responseJson = await responseText.json();
            this.setMembers(responseJson);
        },
        setMembers: function (data) {
            for (let member of data.members) {
                this.members.push(member);
            }
        }
    },
    created(){
        if(this.members){
            this.loadMembers();
        }
    }
})
