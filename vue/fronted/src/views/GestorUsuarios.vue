<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="rol"
    class="elevation-2"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Gestión de Usuarios</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Agregar Usuario
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col v-if="editedIndex===-1"
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.correo"
                      :rules="emailRules"
                      label="Correo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    
                  >
                    <v-select
                    v-model="editedItem.rol"
                    :items="rol"
                    :rules="[v => !!v || 'Rol is required']"
                    label="Rol"
                    required
                    ></v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.password"
                      :rules="[rules.required, rules.min]"
                      hint="At least 8 characters"
                      label="Password"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    v-if="editedIndex===-1"
                  >
                    <v-text-field
                      v-model="editedItem.activo"
                      label="Activo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                :disabled="editedItem.password.length>=8 ? false:true"
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Desea Activar/Desactivar el usuario?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        x-large
        @click="deleteItem(item)"
      > 
        <template v-if="item.activo">
          mdi-toggle-switch
        </template>
        <template v-else >
          mdi-toggle-switch-off-outline
        </template>

      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'GestorUsuarios',
    data: () => ({
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      dialog: false,
      dialogDelete: false,
      rol:['administrador','gestor'],
      headers: [
        {
           text: 'ID',
           sortable: false,
           value: '_id',
        }, 
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Correo', value: 'correo' },
        { text: 'Rol', value: 'rol' },
        { text: 'Activo', value: 'activo' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      usuarios:[],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        _id:'',
        nombre: '',
        correo: '',
        rol: '',
        activo: true,
        password: '',
      },
      defaultItem: {
        _id:'',
        nombre: '',
        correo: 0,
        rol: '',
        activo: true,
        password: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New user' : 'Edit user'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.list()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            _id: 'ddddds',  
            nombre: 'Usuario 0',
            correo: "usuario@gmial.com",
            rol: "Administrador",
            activo: true,
           
          },
          {
            _id: 'qqas'  ,
            nombre: 'Usuario 0',
            correo: "usuario@gmial.com",
            rol: "Administrador",
            activo: true,
           
          }
          
        ]
      },
      list(){ //nota: no usar arraylist aca
          axios.get('http://localhost:3000/api/usuario/list').
          then(response =>{
                  this.usuarios = response.data;
                  console.log(response)
              }
          ).catch(err =>{
              console.log(err);
              return err
          })
      },

      editItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        // this.usuarios.splice(this.editedIndex, 1)
        if (this.editedItem.activo === true) {
          axios.put('http://localhost:3000/api/usuario/desactivate', {
              _id: this.editedItem._id
          }).
          then(response =>{
              this.list();
            }
          ).catch(err =>{
              console.log(err.response);
              return err
          });
        } else {
          axios.put('http://localhost:3000/api/usuario/activate', {
              _id: this.editedItem._id
          }).
          then(response =>{
              this.list();
            }
          ).catch(err =>{
              console.log(err.response);
              return err
          });
        }

        this.closeDelete()
      },


      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    //   save () {
    //     if (this.editedIndex > -1) {
    //       Object.assign(this.usuarios[this.editedIndex], this.editedItem)
    //     } else {
    //       this.usuarios.push(this.editedItem)
    //     }
    //     this.close()
    //   },

      save () {
        if (this.editedIndex > -1) {
          // Object.assign(this.usuarios[this.editedIndex], this.editedItem)

          axios.put('http://localhost:3000/api/usuario/update', {
              nombre: this.editedItem.nombre,
              correo: this.editedItem.correo,
              rol: this.editedItem.rol,
              password: this.editedItem.password,
          }).
          then(response =>{
              this.list();
            }
          ).catch(err =>{
              console.log(err.response);
              return err
          });

        } else {
          
          axios.post('http://localhost:3000/api/usuario/add', {
              nombre: this.editedItem.nombre,
              correo: this.editedItem.correo,
              rol: this.editedItem.rol,
              password: this.editedItem.password,
              activo: this.editedItem.activo
          }  ).
          then(response =>{
                  this.usuarios.push(response.data);
                  
              }
          ).catch(err =>{
              console.log(err.response);
              return err
          })
        }
        this.close()
      },



    },
  }
</script>