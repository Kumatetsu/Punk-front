<script lang="ts">
import { defineComponent, inject } from "vue";
import { beerList } from "../../domain/adapters/beerList";

export default defineComponent({
    setup() {
        const ploc = inject<beerList>("beerList") as beerList;
        const beers = ploc.getBeers();

        return { beers };
    }
})
</script>

<template>
    <main>
        <span v-for="beer in beers">
            {{ beer.name }}
        </span>
    </main>
</template>

<style>
</style>
