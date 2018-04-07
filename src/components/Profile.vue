<template>
	<div id="header">
		<img id="logo" src="../assets/logo.svg" height="48"  width="48" />
		<div id="depro">이동혁</div>
		<div id="add">모임 추가하기</div>
		<img id="plus" src="../assets/button_plus.png" height="40" width="40" @click="showPop=true"/>
		<input-pop v-if="showPop" @close="showPop=false"></input-pop>
	</div>
</template>

<script type="text/javascript">
import InputPop from './InputPop.vue'

export default {
	components: {InputPop},
	data: function() {
    	return {
    		showPop: false
    	}
    }
}
</script>

<style type="text/css">
	#header {
		height: 84px;
		width: 1920px;
	}

	#logo {
		float: left;
		margin-top: 21px;
		margin-left: 368px;
		margin-right: 35px;
	}

	#depro {
		float: left;
	  width: 200px;
	  height: 50px;
	  margin-top: 25px;
	  padding-left: 35;
	  mix-blend-mode: undefined;
	  font-family: NanumSquareOTFB;
	  font-size: 25.8px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.69;
	  letter-spacing: normal;
	  text-align: left;
	  color: #5d5d5d;
	}

	#plus {
		float: right;
		margin-top: 23px;
		margin-right: 20px;
	}

	#add {
	  float: right;
	  width: 120px;
	  height: 19px;
	  margin-top: 23px;
	  margin-right: 371px;
	  mix-blend-mode: undefined;
	  font-family: NanumSquareOTFB;
	  font-size: 19.9px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 2.2;
	  letter-spacing: normal;
	  text-align: right;
	  color: #5d5d5d;
	}
</style>