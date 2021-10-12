<template>
  <v-data-table
    :headers="headers"
    :items="categorias"
    sort-by="rol"
    class="elevation-2"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Gestión de Categorias</v-toolbar-title>
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
              Agregar Categoria
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
                      :rules="[v => !!v || 'nombre is required, Copie en Mayusculas']"
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="8"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.descripcion"
                      :rules="[v => !!v || 'descripcion is required']"
                      label="Descripción"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- <v-col
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
                  </v-col> -->

                
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
            <v-card-title class="text-h5">Desea activar/desactivar la categoria?</v-card-title>
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
        small
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
    name: 'GestorCategorias',
    data: () => ({
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
        { text: 'Descripción', value: 'descripcion' },
        { text: 'Activo', value: 'activo' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      categorias:[],
      
      editedIndex: -1,
      editedItem: {
        _id:'',
        nombre: '',
        descripcion: '',
        activo: true,
        
      },
      defaultItem: {
        _id:'',
        nombre: '',
        descripcion: '',
        activo: true,
        
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
        this.categorias = [
          {
            _id: 'ddddds',  
            nombre: 'Usuario 0',
            descripcion: "usuario@gmial.com",
            activo: true,
           
          },
         
        ]
      },
      list(){ //nota: no usar arraylist aca
          axios.get('http://localhost:3000/api/categoria/list').
          then(response =>{
                  this.categorias = response.data;
                  console.log(response)
              }
          ).catch(err =>{
              console.log(err);
              return err
          })
      },

      editItem (item) {
        this.editedIndex = this.categorias.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.categorias.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      //metodo de activar - desactivar categorias
      deleteItemConfirm () {
        if (this.editedItem.activo === true) {
          axios.put('http://localhost:3000/api/categoria/desactivate', {
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
          axios.put('http://localhost:3000/api/categoria/activate', {
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
      //metodos de crear y actualizar categorias
      save () {
        if (this.editedIndex > -1) {
          axios.put('http://localhost:3000/api/categoria/update', {
              _id: this.editedItem._id,
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion
          }  ).
          then(response =>{
                  this.list();
              }
          ).catch(err =>{
              console.log(err.response);
              return err
          })
        } else {
          
          axios.post('http://localhost:3000/api/categoria/add', {
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion,
              activo: this.editedItem.activo
          }  ).
          then(response =>{
                  this.list();
                  
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