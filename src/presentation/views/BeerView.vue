<script lang="ts">
import type { beerAdapter } from "../../application/adapters/beer";
import { useAdapterState } from "@/domain/adapters/useAdapterState";
import { defineComponent, inject } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    data() {
        return {
        }
    },
    beforeRouteUpdate(to, from, next) {
        next();
    },
    setup() {
        const router = useRoute();
        const adapter = inject<beerAdapter>("beer") as beerAdapter;
        adapter.clearBeer();
        adapter.loadBeer(+router.params.id);
        const state = useAdapterState(adapter);
        return { adapter, state };
    },
});
</script>

<template>
    <main>
        <h1 v-if="state?.beer">
            welcome to {{ state.beer.name }}
        </h1>
    </main>
</template>

<style>
</style>
