<script lang="ts">
import type { BeerContract } from "@/infrastructure/http/punkTypes";
import { defineComponent, inject } from "vue";
import type { beerListAdapter } from "../../application/adapters/beerList";
import { useAdapterState } from "../../domain/adapters/useAdapterState";
import BeerCard from "../components/BeerCard.vue";

export default defineComponent({
    data() {
        return {
            query: "",
        }
    },
    methods: {
        goToBeer(beer: BeerContract) {
            this.$router.push({
                name: 'beer',
                params: {
                    id: beer.id,
                }
            });
        },
    },
    setup() {
        const adapter = inject<beerListAdapter>("beerList") as beerListAdapter;
        const state = useAdapterState(adapter);
        return { adapter, state };
    },
    components: { BeerCard },
});
</script>

<template>
    <main class="list">
        <h1>List off {{ state.beers.length }} beers | page {{ state.page }}</h1>
        <button @click="adapter.nextPage">NextPage</button>
        <button @click="adapter.resetPage">Reset</button>
        <input type="text" v-model="query" v-on:keyup="adapter.filter(query)" />
        <ul>
            <BeerCard v-for="beer in state.beers" :key="beer.id" :beer="beer" @click="goToBeer(beer)" />
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
