<template>
    <div>
        <Flicking :options="{ align: 'center', circular: true }" @move-end="onMoveEnd" :plugins="plugins">
            <div v-for="(service, i) in services" :index="i" :key="i">
                <div class="cover"><span class="name">{{ service.name }}</span></div>
            </div>
        </Flicking>
    </div>
</template>
  
<script>
import { Flicking } from '@egjs/vue-flicking'
import { AutoPlay, Fade, Perspective } from '@egjs/flicking-plugins'
export default {
    name: 'ServicePage',
    data: function() {
        return {
            plugins: [new AutoPlay({duration:5000, direction:"NEXT", stopOnHover:true}), new Fade(), new Perspective({ rotate:0.5 })],
            services: [
                {
                    name: 'CODE-SITE',
                    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.searchenginejournal.com%2Fdefinitive-list-reasons-google-isnt-indexing-site%2F118245%2F&psig=AOvVaw2NsJeKtHDDtzL755iF73tl&ust=1677167897681000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCcgbi_qf0CFQAAAAAdAAAAABAE',
                    description: '저희의 Landing Page를 만드는 프로젝트입니다.'
                },
                {
                    name: 'CODE-COLLAB',
                    image: 'none',
                    description: 'Markdown 기반의 협업 툴입니다.'
                },
                {
                    name: 'CODE-CATCH-MELODY',
                    image: 'none',
                    description: '노래를 듣고 맞추는 온라인 게임입니다.'
                },
                {
                    name: 'CODE-GOLF',
                    image: 'none',
                    description: 'Golf의 점수 계산과 전적을 기록해주는 프로젝트입니다.'
                },
                {
                    name: 'CODE-STORY',
                    image: 'none',
                    description: '인터렉티브 스토리 텔링 컨텐츠 플랫폼입니다.'
                },
                {
                    name: 'CODE-REVERSE-ENGINEERING',
                    image: 'none',
                    description: '리버스 엔지니어링한 결과를 기반으로 역공학에 도움을 주는 툴입니다.'
                }
            ],
            slides:[1,2,3,4,5]
        }
    },
    components: {
        Flicking: Flicking
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
</style>
<style scoped>
.cover {
    position: relative;
    width: 420px;
    height: 594px;
    margin-left: 30px;
    text-align: center;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3) 3px, rgba(255,255,255,0.5) 5px, rgba(255, 255, 255, 0.25) 7px, rgba(255, 255, 255, 0.25) 10px, transparent 12px, transparent 16px, rgba(255, 255, 255, 0.25) 20px, transparent 22px);
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 1), inset -1px 1px 2px rgba(255, 255, 255, 0.5);
    border-radius: 5px;

    background-color: gray;
}
</style>