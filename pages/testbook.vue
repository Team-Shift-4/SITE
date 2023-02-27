<template>
    <div>
        <fw-turn :options="bookOptions" class="book">
            <div v-for="(i, page) in pages" :index="i" :key="i">
                {{ page[i] }}
            </div>
        </fw-turn>
    </div>
</template>
<script>
import { FwTurn } from "vue-turnjs";
export default{
    components: {FwTurn},
    data() {
        return {
            bookOptions: {
                display:"double",
                acceleration: true,
                elevation: 50
            },
            pages: [[1,2],[3,4]],
        };
    },
}
</script>
<style src="vue-turnjs/dist/vue-turnjs.esm.css"></style>
<style scoped>
.book{
    width: 1152px;
    height: 752px;
    background-color: gray;
}

.book .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}
</style>