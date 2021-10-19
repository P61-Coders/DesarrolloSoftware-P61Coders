<template>
     <form action="" class="row">
        <input
        class="col-8 input-form"
        type="email"
        name="EMAIL"
        placeholder=" Ingresa tu correo "
        />
        <button-2 class="col-3" type="submit" :name="buttonName">
            Suscribirse
        </button-2>
    </form>
</template>

<script>
import Button2 from '../Button2.vue';

export default {
    components: {
        Button2,
    },
    data() {
        return{
            buttonName: "Enviar",
        }
    },
}
</script>

<style scoped>
.input-form {
    border: 1px solid #b5b9be;
    border-radius: 25px;
    margin-right: 15px;
    outline: none;
    color: #707b8e;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
}
</style>