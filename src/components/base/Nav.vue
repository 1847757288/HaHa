<!-- 顶部导航 -->
<template>
	<div id="top_nav">
		<router-link to="/home">首页</router-link>
		<!-- <router-link to="/time">时间栈</router-link> -->
		<router-link to="/log">日记</router-link>
		<router-link to="/say">留言</router-link>
		<!-- <router-link to="/aboutme">关于我</router-link> -->
		<login></login>
	</div>
</template>

<script>
	
	import login from './Login.vue'
	export default {
		name: 'homenav',
		components:{
			login
		}
		
	}
</script>

<style scoped>
	#top_nav {
		height: 2.5rem;
		display: flex;
		justify-content: center;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
	}


	a {
		font-size: 0.875rem;
		color: black;
		text-decoration: none;
		padding: 0.625rem 1.25rem;
	}

	a:hover {
		background-color: #409EFF;
		color: #fff;
		border-radius: 2rem;
	}

	
</style>
