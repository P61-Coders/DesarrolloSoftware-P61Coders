<template>
    <button class="button2" :to="{ name: 'Login' }">
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
.button2 {
    background-color: #8f1bdc;
    color: #ffffff;
    border-radius: 25px;
    padding: 10px 32px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.15);
    font-family: 'Poppins', sans-serif;
}

.button2:hover {
    background-color: #7519b3;
}
</style>