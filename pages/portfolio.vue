<template>
    <div>
        <div class="jumbotron">
        </div>
        <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd" :plugins="plugins">
            <div v-for="(member, i) in members" :index="i" :key="i">
                <div class="card"><span class="name">{{ member.name  }}</span></div>
            </div>
        </Flicking>
    </div>
</template>
  
<script>
import { Flicking } from '@egjs/vue-flicking'
import { AutoPlay, Fade } from '@egjs/flicking-plugins'
export default {
    name: 'PortfolioPage',
    data: function(){
        return {
            members: [
                {name: 'Jungin Kim', color: ''},
                {name: 'Yein Yoon', color: ''},
                {name: 'Seokbeom Jang', color: ''},
                {name: 'Jungwon Kim', color: ''},
                {name: 'Sejin Lee', color: ''},
                {name: 'Jiseok Lee', color: ''},
                {name: 'Jeong Heo', color: ''},
                {name: 'Bongsik Kwon', color: ''},
                {name: 'Hyuktae Kwon', color: ''},
                {name: 'Junseok Park', color: ''},
                {name: 'Yura Park', color: ''},
                {name: 'Jinho Kim', color: ''},
                {name: 'Wonkyu Yoo', color: ''},
                {name: 'Seonmi Kim', color: ''},
                {name: 'Jinhyeok Ryu', color: ''},],
            plugins: [new AutoPlay({duration:1000, direction:"NEXT", stopOnHover:true}), new Fade()]
        }
    },
    components: {
        Flicking: Flicking
    }
}
</script>
<style>
@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");
*{
    padding: 0;
    margin: 0;
}
.card {
    position: relative;
    width: 360px;
    height: 200px;
    background-color: gray;
    margin-left: 30px;
    text-align: center;
    border-radius: 8px;
}
.card .name {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-family: 'barcode';
    font-size: 50px;
}
.card:hover {
    background-color: orange;
}

.jumbotron {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #525252;
    margin-bottom: 20px;
}
</style>