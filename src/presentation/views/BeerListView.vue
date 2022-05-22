<script lang="ts">
import { defineComponent, inject } from "vue";
import type { beerList } from "../../domain/adapters/beerList";
import { useAdapterState } from "../../domain/adapters/useAdapterState";
import BeerCard from "../components/BeerCard.vue";

export default defineComponent({
    data() {
        return {
            page: 1,
        };
    },
    setup() {
        const adapter = inject<beerList>("beerList") as beerList;
        const state = useAdapterState(adapter);
        return { state };
    },
    components: { BeerCard },
});
</script>

<template>
    <main class="list">
        <h1>List off {{ state.beers.length }} beers</h1>
        <ul>
            <BeerCard v-for="beer in state.beers" :beer="beer" />
        </ul>
    </main>
</template>

<style>
ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}

ul li {
    margin: 20px;
}
</style>
