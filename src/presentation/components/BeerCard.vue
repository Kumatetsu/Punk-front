<script lang="ts">
import { defineComponent, inject } from "vue";

import type { BeerContract } from "@/infrastructure/http/punkTypes";

export default defineComponent({
    props: {
        beer: {
            type: Object as () => BeerContract,
            required: true,
        },
    },
});
</script>

<template>
    <li class="card">
        <img :src="beer.image_url" />
        <div class="li-text">
            <h3>{{ beer.name }}</h3>
            <p>{{ beer.description }}</p>
        </div>
    </li>
</template>

<style>
.card {
    height: 200px;
}

.li-text {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
}

h3 {
    font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
}

li {
    display: flex;
    flex-direction: row;
    max-height: 200px;
}

li p {
    width: 100%;
}

li img {
    width: 30%;
    margin: 0 15px 0 0;
}

li:hover {
    background: #34495e;
    color: #41b883;
}
</style>
