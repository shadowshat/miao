<template>
	<div id="main">
		
		<Header />
		
		<div id="content">
			<Login />
		</div>
		<tabBar />
	</div>
</template>

<script>
	import Header from '@/components/header/header.vue'
	import tabBar from '@/components/tabBar/tabBar.vue'
	import Login from '@/components/Login'
	export default{
		name:'mine',
		components:{
			Header,
			tabBar,
			Login
		}
	}
</script>

<style>
</style>
