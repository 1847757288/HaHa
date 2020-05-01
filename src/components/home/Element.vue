<!-- 主页时间轴上的一个个元素 -->
<template>
	<div class="home_element" @click="see_home_log(arr[0])">
		<div class="header">
			<span>{{arr[2]}}</span>
		</div>
		<div class="content">
			<p class="content_title">{{arr[1]}}</p>
		</div>
		<div class="foot">
			<span class="good"><i class="good_ico" @click="good_click($event)"></i>3</span>
		</div>
	</div>
</template>

<script>
	import {
		GetHomeLogById
	} from '@/network/home/home.js'
	export default {
		data() {
			return {
				time: new Date().toLocaleDateString(),
				arr:this.$route.params.arr
			}
		},
		methods: {
			good_click(e) {
				e.target.style.color = 'red'
			},
			see_home_log(id) {
				GetHomeLogById(id).then(res => {
					if (res.data != 'err') {
						// console.log(res)
						// this.$store.state.md=res.data.text
						this.$router.push({
							name:'see_home_log',
							path:'/myblog',
							params:{
								obj:res.data
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.home_element {
		cursor: pointer;
		display: inline-block;
		position: relative;
		max-width: 50%;
		padding: 1rem;
		margin: 2rem 0;
		margin-left: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .22), 0 0 6px rgba(0, 0, 0, .04)
	}

	.content {
		position: relative;
	}

	.content::before {
		position: absolute;
		left: -2.6rem;
		top: -12px;
		content: "";
		height: 4px;
		width: 12px;
		border: 4px solid #fff;
		-webkit-border-radius: 8px;
		background: #666;
	}

	.content_title {
		text-indent: 2rem;
		padding: 0.625rem 0;
	}

	.good {
		display: inline-block;
		padding: 0.625rem 0 0;
		width: 3rem;
		height: 1.5rem;
	}

	.content_img {
		width: 100%;
	}

	.content_img img {
		max-width: 100%;
	}

	.good_ico {}

	.good_ico:hover {
		color: blue;
		cursor: pointer;
	}

	.del {
		position: absolute;
		bottom: 0;
		right: 0;
		display: inline-block;
	}
</style>
