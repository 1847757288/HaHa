<!-- 主页时间轴 -->
<template>
	<div id="home_time">
		<span v-if="$store.state.user_info==false"></span>
		<span v-else>
			<router-link tag="span" to="/home_release">
				<el-button type="primary" round class="release">发布</el-button>
			</router-link>
		</span>
		<div class="item">
			<el-timeline>
				<el-timeline-item v-for='(item,index) in arr' :key='index' :timestamp="item[2]" placement="top" color='#409eff' type='primary' icon='el-icon-more'>
					<div @click='see_home_log(item)' :class="{test:active==index}" @mousemove="active=index" class="hov">
						<el-card style="text-align: center;">
							<div class="log_element">
								<h3>{{item[1]}}</h3>
								<img :src="baseurl+item[6]">
								<p class="log_introduce">{{item.introduce}}</p>
							</div>
						</el-card>
					</div>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
	import elem from './Element.vue'
	import {
		getHomeData
	} from '@/network/home/home.js'
	export default {
		components: {
			elem
		},
		data() {
			return {
				arr: [],
				baseurl: this.$global.baseUrl,
				active: -1
			}
		},
		created() {
			getHomeData().then(data => {
				this.arr = data.data.reverse()
			})
		},
		methods: {
			nologin() {
				this.$message({
					type: 'error',
					message: '请先登录!',
					duration: 1000
				});
			},
			see_home_log(item) {
				this.$router.push({
					name: 'see_home_log',
					path: '/myblog',
					params: {
						arr: item
					}
				})
			}
		}
	}
</script>

<style>
	#home_time {
		position: relative;
		width: 100%;
		padding: 0 10px;
		margin: 1rem 0;
	}

	.release {
		margin-left: 1rem !important;
	}

	.item {
		width: 20rem;
	}

	.log_element {}

	.hov {}

	.hov:hover {
		cursor: pointer;
	}

	.log_element img {
		height: 8rem;
	}

	.log_element h3 {
		font-size: 1rem;
		margin-bottom: 0.5rem;
		max-height: 2.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.log_introduce {
		display: inline-block;
		height: 100%;
		float: left;
		margin-left: 1rem;
		font-size: 1.2rem;
	}

	.test {
		animation: myfirst 1s infinite alternate;
	}

	@keyframes myfirst {
		from {
			box-shadow: 1px 3px 12px 4px rgba(64, 158, 255, .12), 0 0 6px rgba(64, 158, 255, .04)
		}

		to {
			box-shadow: 1px 3px 12px 4px rgba(64, 158, 255, .22), 0 0 6px rgba(64, 158, 255, .24)
		}
	}
</style>
