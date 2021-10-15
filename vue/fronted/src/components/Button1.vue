<template>
    <button class="button1" :to="{ name: 'Login' }">
        {{ name }}
    </button>
</template>
<script>
export default {
    data() {
       return{
           
       } 
    },
    props:{
        name: String,
    }
}
</script>
<style scoped>
.button1 {
    background-color: #ffffff;
    color: #8f1bdc;
    border-radius: 25px;
    padding: 8px 30px;
    border: 2px solid #8f1bdc;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.15);
    font-family: 'Poppins', sans-serif;
}

.button1:hover {
    background-color: #8f1bdc;
    color: #ffffff;
}
</style>