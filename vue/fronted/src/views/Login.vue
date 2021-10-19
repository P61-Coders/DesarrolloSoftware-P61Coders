<template>
  <v-container class="area_principal">  
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="correo"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="contraseña"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
    ></v-text-field>
    <p>{{message}}</p>


    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
  </v-container>  
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      message: "",
      valid: true,
      name: '',
      correo: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

        show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      
      
    }),

    methods: {
        //validaremos correo y contraseña, si todo es correcto lo manda a la view Admin
      validate () {
        axios.post('https://app-fruver-grupo-1.herokuapp.com/api/usuario/login',{
            correo: this.correo,
            password: this.password
        })
        .then(response =>{
            console.log(response.data);
            return response.data
        })
        .then(data => {
            localStorage.setItem('token',data.tokenreturn);
            this.$router.push({name:'Admin'})

        })
        .catch( err =>{
            this.message =null;
            console.log(err.response);
            if ([404,401].includes(err.response.status)) {
                this.message = "el correo o contraseña son incorrectas"
                console.log(this.message)
            }else{
                this.message = "ocurrio un error interno, intenta de nuevo en uno minutos"
                console.log(this.message)
            }
            
        })

      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
.area_principal{
  padding-top: 150px;
  padding-bottom: 150px;
}
</style>