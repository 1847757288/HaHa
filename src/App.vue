<template>
	<div id="app">
		<div id="all">
			<my-nav></my-nav>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import myNav from '@/components/base/Nav.vue'
	import {
		GetUserInfo
	} from '@/network/home/home.js'
	export default {
		name: 'app',
		components: {
			myNav
		},
		created() {
			this.test()
			this.pcpe()
			this.GetUserInfo()
		},
		methods: {
			pcpe() {
				//判断是手机还是电脑用户
				var sUserAgent = navigator.userAgent.toLowerCase();
				var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
				var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
				var bIsMidp = sUserAgent.match(/midp/i) == "midp";
				var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
				var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
				var bIsAndroid = sUserAgent.match(/android/i) == "android";
				var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
				var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

				if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
					this.$store.commit('pe')
				}
			},
			test() {
				//打包的项目的第一个路由可能不自动跳转，则手动跳转
				if (this.$route.path != '/home') {
					this.$router.push('/home')
				}
			},
			GetUserInfo() {
				// 向服务器发送cookie核对
				GetUserInfo().then(data => {
					if (data.data) {
						this.$store.commit('chageUserInfo', data.data)
					}
				})
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	#app {
		width: 100%;
		margin: 0 auto;
	}

	#all {
		margin: 0 auto;
		max-width: 62.5rem;
	}

	body {
		background: url(./assets/bg.png) repeat fixed center;
		padding: 0 0.5rem;
		/* overflow-y: scroll;
		overflow-x: auto; */
	}

	.mylog iframe {
		border: none;
		background-color: rgba(255, 255, 255, .8);
		z-index: 0;
		overflow: hidden;
	}

	::-webkit-scrollbar {
		display: none;
	}
</style>
