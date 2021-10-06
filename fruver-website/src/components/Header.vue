<template>
    <section>
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </section>    
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            items: [],
        }
    }
}
</script>

<style scoped>

</style>