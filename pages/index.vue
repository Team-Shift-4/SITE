<template>
  <div>
    <div class="logo_big">
      <div class="logo_stack" stype="--stacks: 3;">
        <span style="--index: 0;">shift 4</span>
        <span style="--index: 1;">shift 4</span>
        <span style="--index: 2;">shift 4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'barcode';
  src: url('@/static/LibreBarcode39Text-Regular.ttf');
}
.logo_big{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo_stack{
  display: grid;
  grid-template-columns: 1fr;
}
.logo_stack span{
  font-family: 'barcode';
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 10rem;
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 2s alternate-reverse;
}
.logo_stack span:nth-child(odd) {--glitch-translate: 8px;}
.logo_stack span:nth-child(even) {--glitch-translate: -8px;}
@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 skyblue;
    
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 skyblue;
  }
  100% {
    text-shadow: none;
  }
}
@keyframes glitch {
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 skyblue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 skyblue;
  }
  4%, 100% {  text-shadow: none; transform: none; }
}
.ratio13:before {
	content: "";
	position: relative;
	display: block;
	width: 100%;
	padding-top: 130%;
}
.ratio062:before {
	content: "";
	position: relative;
	display: block;
	width: 100%;
	padding-top: 66%;
}
html, body, .flicking, .background {
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
.flicking, .background {
	position: absolute;
	overflow: hidden;
}
.background .rect,
.background .circle,
.background .star,
.background .triangle {
	position: absolute;
}
.background .circle {
	border-radius: 50%;
}
.background .circle:before {
	content: "";
	position: relative;
	display: block;
	width: 100%;
	padding-top: 100%;
}
.c1 {
	width: 60vmax;
	min-width: 1000px;
	bottom: 50%;
	right: 45%;
	background: #E46865;
}
.c2 {
	width: 50%;
	min-width: 800px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 30px solid #f0f0f0;
	z-index: -1;
}
.c3 {
	width: 40%;
	min-width: 600px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #F2B51D;
	z-index: -1;
}
.c4 {
	width: 60vmax;
	min-width: 1000px;
	top: 50%;
	left: 45%;
	background: #30B78E;
}
.c5 {
	width: 20%;
	min-width: 300px;
	bottom: 60%;
	left: 70%;
	border: 40px solid #ea905d;
}
.c6 {
	width: 20%;
	min-width: 300px;
	top: 60%;
	right: 70%;
	border: 40px solid #5d95ea;
}
.c7 {
	width: 60vmax;
	min-width: 1000px;
	left: 50%;
	top: 80%;
	background: #6692CA;
}
.r1 {
	width: 20px;
	height: 20px;
	top: 90%;
	right: 65%;
	border: 3px solid #7095DD;
	border-radius: 2px;
}
.t1 {
	width: 22px;
	bottom: 90%;
	left: 65%;
}
.iphone, .ipad, .macbook, .imac {
	z-index: 2050;
	transform: translateY(100vh);
}
.iphone {
	position: absolute;
	width: 200px;
	height: 400px;
	border-radius: 20px;
	background: #eee;
	box-shadow: rgba(100, 100, 100, 0.4) 5px 5px;
	left: 50%;
	top: 100%;
	transform: translate(-50%, -90px);
	margin: auto;
	transform-origin: bottom;
}
.iphone .head {
	position: absolute;
	width: 36px;
	height: 8px;
	top: 22px;
	left: 0;
	right: 0;
	border-radius: 4px;
	margin: auto;
	background: #ddd;
}
.iphone .container {
	position: absolute;
	width: calc(100% - 16px);
	height: calc(100% - 100px);
	background: transparent;
	border: 2px solid #ddd;
	background: #eee;
	position: absolute;
	border-radius: 5px;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 52px;
}
.iphone .home {
	position: absolute;
	width: 36px;
	height: 36px;
	border: 2px solid #ccc;
	background: #eee;
	border-radius: 50%;
	bottom: 6px;
	left: 0;
	right: 0;
	margin: auto;
}

.panels {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	height: 150px;
}
.panels .panel {
	position: relative;
	width: 70%;
	height: 100%;
	border-radius: 10px;
	background: #f55;
}
.panels .panel:nth-child(4n + 1) {
	background-color:#78CAFF;
}
.panels .panel:nth-child(4n + 2) {
	background-color:#FFD99D;
}
.panels .panel:nth-child(4n + 3) {
	background-color:#FFB0B9;
}
.panels .panel:nth-child(4n) {
	background-color:#B5F6B9;
}
.ipad {
	position: absolute;
	width: 150px;
	background: #444;
	border-radius: 5px;
	left: 50%;
	bottom: 50%;
}
.ipad .container {
	position: absolute;
	left: 6px;
	top: 6px;
	bottom: 6px;
	right: 6px;
	background: #eee;
	border-radius: 3px;
}
.ipad .panels {
	height: 80px;
}
.ipad .panels .panel {
	width: 40%;
}
.imac {
	position: absolute;
	width: 280px;
	left: 50%;
	bottom: 50%;
}
.imac .screen {
	position: relative;
	width: 100%;
	height: 170px;
	margin: auto;
	background: #444;
	border-radius: 5px 5px 0px 0px;
}
.imac .screen .container {
	position: absolute;
	left: 8px;
	right: 8px;
	top: 12px;
	bottom: 12px;
	background: #eee;
}
.imac .panels {
	height: 60px;
}
.imac .panels .panel {
	width: 50px;
}

.imac .bottom {
	position: relative;
	width: 100%;
	height: 26px;
	margin: auto;
	background: #eee;
	border-radius: 0px 0px 5px 5px;	
}
.imac .stand {
	position: relative;
	margin: auto;
	width: 40px;
	border-bottom: 35px solid #eee;
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;
}
.imac .stand-bottom {
	position: relative;
	margin: auto;
	width: 100px;
	height: 6px;
	border-radius: 3px;
	background: #e5e5e5;
}
.macbook {
	position: absolute;
	width: 240px;
	left: 50%;
	bottom: 50%;
}
.macbook .screen {
	position: relative;
	width: 200px;
	margin: auto;
	background: #444;
	border-radius: 5px;
}
.macbook .screen .container {
	position: absolute;
	left: 6px;
	top: 6px;
	bottom: 6px;
	right: 6px;
	background: #eee;
	border-radius: 3px;
}
.macbook .panels {
	height: 50px;
}
.macbook .panels .panel {
	width: 40px;
}
.macbook .bottom {
	position: relative;
	width: 240px;
	height: 10px;
	background: #eee;
	margin: 3px auto 0px;
	border-radius: 5px;
}

.background2 {
	background: #9c5dea;
	z-index: -1;
	transform: translateY(100vh);
}
.flicking .eg-flick-viewport,
.flicking .eg-flick-camera,
.flicking .page {
	position: relative;
	width: 100%;
	height: 100%;	
}
.flicking .page .container {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.flicking .page.main h1, .flicking .page.main .description {
	text-align: center;
} 
.flicking .page.main h1 {
	font-size: 60px;
	padding: 0;
	margin-bottom: 15px;
	color: #fff;
}
.flicking .page.main .description {
	font-size: 16px;
	max-width: 600px;
	margin: 0px auto;
	padding: 5px;
	box-sizing: border-box;
	color: #fff;
}

.flicking .page.features h3,
.flicking .page.features .description {
	color: #fff;
}
.flicking .page.features .feature {
	position: absolute;
	width: 200px;
	top: 50%;
	left: 50%;
}

.flicking .page.slogan h2 span[data-text]:before {
	content: attr(data-text);
}
.flicking .page.slogan .container {
	min-width: 600px;
	height: 350px;
	text-align: center;
	color: #eee;
}
.flicking .page.more a {
	text-decoration: underline;
	color: #eee;
}
.flicking .page.more h2 {
	width: 110px;
	padding: 5px 10px 5px 10px;
	border: 3px solid #eee;
	color: #eee;
}



.pagination {
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2080;
}
.pagination .dot {
	position: relative;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.4);
	margin: 10px 10px;
	transition: background-color ease 0.5s;
	cursor: pointer;
}
.pagination.black .dot.selected {
	background: #333;
}
.pagination.black .dot {
	background: rgba(100, 100, 100, 0.4);
}
.pagination .dot.selected {
	background: white;
}

.wheel {
	position: absolute;
	bottom: 110px;
	width: 2px;
	height: 10px;
	left: 50%;
	transform: translate(-50%, 0);
	background: #eee;
}
</style>