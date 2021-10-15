<template>
      <v-app class="mt-16" id="inspire">
        <v-carousel class="mt-16">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            :href="item.link"
          ></v-carousel-item>
        </v-carousel>
      </v-app>
</template>

<script>
export default {
    name: 'seccionNoticias',
    data: () =>({
        items: [
        {
          src: 'https://s9.gifyu.com/images/-FRUVER-.gif',
          link: 'Link de pagina que falta'
        },
        {
          src: 'https://i.ibb.co/K7Fg3B7/No-olvides-revisar-nuestro.jpg',
          link: 'Que diriga al calendario'
        },
        {
          src: 'https://i.ibb.co/wyM2bG0/Delivery.png',
        },
      ],
    })
}
</script>