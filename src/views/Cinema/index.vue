<template>
	<div id="main">
		
		<Header />
		 <div id="content">
		  	<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
		  	</div>	
			<Clist />  
</div>
		<tabBar />
	</div>
</template>

<script>
	import Header from '@/components/header/header.vue'
	import tabBar from '@/components/tabBar/tabBar.vue'
	import Clist from '@/components/Clist'
	export default{
		name:'cinema',
		components:{
			Header,
			tabBar,
			Clist
		}
	}
</script>

<style>
	#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
