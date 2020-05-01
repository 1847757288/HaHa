<!-- 历史 -->
<template>
	<div class="b">
		<el-timeline>
			<el-timeline-item v-for='(item,index) in arr' :key='index' :timestamp="item.time" placement="top">
				<el-card>
					<div class="log_element">
						<h3>{{item.title}}</h3>
						<img src="../../assets/head.jpg">
						<p class="log_introduce">{{item.introduce}}</p>
					</div>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
						time: "2018/4/12",
						title: '日记1',
						introduce: '日记的简介1'
					},
					{
						time: "2018/4/22",
						title: '日记2',
						introduce: '日记的简介2'
					}, {
						time: "2018/4/2",
						title: '日记3',
						introduce: '日记的简介3'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.log_element {
		height: 9rem;
	}

	.log_element img {
		height: 8rem;
		float: left;
	}
	.log_element h3{
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	.log_introduce{
		display: inline-block;
		height: 100%;
		float: left;
		margin-left: 1rem;
		font-size: 1.2rem;
	}
</style>
