<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="articulos"
      sort-by="precioXkilo"
      class="elevation-2"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Gestión de Artículos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Agregar Artículo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.descripcion"
                        label="Descripcion"
                        :rules="[(v) => !!v || 'minimo 7 letras']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.categoria"
                        :items="categorias"
                        :rules="[(v) => !!v || 'categoria is required']"
                        label="Categoria"
                        required
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.precioXkilo"
                        label="PrecioXKilo"
                        :rules="[(v) => !!v || 'Precio is required']"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.codigo"
                        label="Codigo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4"> </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn
                  :disabled="editedItem.codigo.length >= 1 ? false : true"
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
              <v-card-title class="text-h5"
                >Desea borrar el articulo?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" @click="editItem(item)"> {{ icons.mdiPencil }} </v-icon>
        <v-icon @click="deleteItem(item)"> {{ icons.mdiDelete }} </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
import {
  mdiPencil,
  mdiDelete,

} from '@mdi/js';

export default {
  name: "GestorArticulos",
  data: () => ({
    dialog: false,
    dialogDelete: false,

    headers: [
      {
        text: "Codigo",
        sortable: false,
        value: "codigo",
      },
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Descripción", value: "descripcion" },
      { text: "PrecioXkilo", value: "precioXkilo" },
      { text: "Categoria", value: "categoria.nombre" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    articulos: [],
    categorias: [],
    icons: {
      mdiPencil,
      mdiDelete,
    },
    editedIndex: -1,
    editedItem: {
      _id: "",
      nombre: "",
      codigo: "",
      descripcion: "",
      precioXkilo: 0,
      categoria: "",
    },
    defaultItem: {
      _id: "",
      nombre: "",
      codigo: "",
      descripcion: "",
      precioXkilo: 0,
      categoria: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New user" : "Edit user";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
    this.categoriasListar();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          _id: "ddddds",
          nombre: "Usuario 0",
          correo: "usuario@gmial.com",
          rol: "Administrador",
          activo: true,
        },
      ];
    },
    categoriasListar() {
      axios
        .get("https://fruver-frontend-grupo-1.herokuapp.com/api/categoria/listActivos")
        .then((response) => {
          let respuesta = response.data;
          respuesta.map((item) => {
            this.categorias.push({
              text: item.nombre,
              value: item._id,
            });
            console.log(this.categorias);
          });
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    list() {
      //nota: no usar arraylist aca
      axios
        .get("https://fruver-frontend-grupo-1.herokuapp.com/api/articulo/list")
        .then((response) => {
          this.articulos = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },

    editItem(item) {
      this.editedIndex = this.articulos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.articulos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      if (this.editedIndex > -1) {
        axios
          .delete("https://fruver-frontend-grupo-1.herokuapp.com/api/articulo/remove", {
            data: { _id: this.editedItem._id }, // es necesario enviarlo adentor de un objeto 'data'
          })
          .then((response) => {
            this.list();
          })
          .catch((err) => {
            console.log(err.response);
            return err;
          });
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put("https://fruver-frontend-grupo-1.herokuapp.com/api/articulo/update", {
            _id: this.editedItem._id,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            precioXkilo: this.editedItem.precioXkilo,
            categoria: this.editedItem.categoria,
            codigo: this.editedItem.codigo,
          })
          .then((response) => {
            this.list();
          })
          .catch((err) => {
            console.log(err.response);
            return err;
          });
      } else {
        axios
          .post("https://fruver-frontend-grupo-1.herokuapp.com/api/articulo/add", {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            precioXkilo: this.editedItem.precioXkilo,
            categoria: this.editedItem.categoria,
          })
          .then((response) => {
            this.list();
          })
          .catch((err) => {
            console.log(err.response);
            return err;
          });
      }
      this.close();
    },
  },
};
</script>