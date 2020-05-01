<!-- 主页-我的头像卡片 -->
<template>
	<div id="my_avatar">
		<div class="avatar">
			<img src="./../../assets/head.jpg">
		</div>
		<div class="my_info">
			<h1 id="name">HLP</h1>
			<p>逆水行舟，不进则退</p>
			<div class="tag"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'me',
		methods:{
			test(){
			}
		},
		created(){
		}
	}
</script>

<style scoped>
	#my_avatar {
		position: relative;
		height: 9rem;
	}

	.avatar {
		width: 9rem;
		height: 9rem;
		overflow: hidden;
		display: inline-block;
		float: left;
		margin-right: 1rem;
	}

	.avatar img {
		width: 9rem;
		height: 9rem;
		border-radius: 40%;
	}

	.my_info {
		height: 9rem;
		display: inline-block;
		float: left;
	}
	h1{
		font-size: 3rem;
		font-weight: 300;
		padding-top: 1rem;
		
	}
	p{
		line-height: 4rem;
		font-size: 1.2rem;
	}
</style>
