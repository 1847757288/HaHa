<!-- 登录功能 -->
<template>
	<div>
		<span v-if="this.$store.state.user_info===false">
			<el-button type="text" @click="dialogVisible = true" class="login">登录</el-button>
		</span>
		<span v-else @mouseenter='$mousein()' @mouseleave="$mouseout()">
			<span v-if="!exit">
				<el-button type="text" class="login">已经登录</el-button>
			</span>
			<span v-else>
				<el-button type="text" class="login" @click='exit_login()'><span class="exit">退出登录</span></el-button>
			</span>
		</span>
		<el-dialog title="登录" :visible.sync="dialogVisible" :close-on-click-modal=false width="22rem" :lock-scroll=false class="dialog">
			<el-input v-model="username" placeholder="请输入账号" class="username"></el-input>
			<el-input v-model="pwd" placeholder="请输入密码" class="pwd" show-password></el-input>
			<el-checkbox v-model="cheakeds" style="margin-top: 0.5rem;">下次自动登录</el-checkbox>
			<div class="buts">
				<el-button type="primary" class="btn_login" @click='login()'>登录</el-button>
				<el-button class="btn_cancel" @click='cancel()'>取消</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		sendcookie
	} from '@/network/home/home.js'
	export default{
		data(){
			return {
				dialogVisible: false,
				username: '',
				pwd: '',
				cheakeds: false,
				exit: false
			}
		},
		methods: {
			login() {
				if (!this.username || !this.pwd) {
					this.$message({
						type: 'warning',
						message: '账号或密码为空!',
						duration: 1000
					})
					return
				}
				sendcookie(this.username, this.pwd, this.cheakeds).then(data => {
					if (data.data.length == 1) {
						this.$store.commit('chageUserInfo', data.data)
						this.dialogVisible = false
						this.$message({
							type: 'success',
							message: '登录成功!',
							duration: 1000
						});
					} else {
						this.$message({
							type: 'error',
							message: '用户名或密码错误!',
							duration: 1000
						});
					}
				})
			},
			cancel() {
				this.dialogVisible=false
			},
			$mousein() {
				this.exit = true
			},
			$mouseout() {
				this.exit = false
			},
			exit_login() {
				this.$confirm('确定退出？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					lockScroll: false
				}).then(() => {
					this.delCookie('id')
					this.delCookie('pwd')
					this.$store.commit('exit_login')
					window.location.reload()
					this.$message({
						type: 'success',
						message: '退出成功!',
						duration: 1000
					});
				}).catch(() => {})
			},
			delCookie(name) {
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval = this.getCookie(name);
				if (cval) {
					document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
				}
			},
			getCookie(name) {
				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if (arr = document.cookie.match(reg)) {
					return (arr[2]);
				} else {
					return false
				}
			}
		}
	}
</script>

<style>
	.username {
		margin-bottom: 1rem;
	}
	
	.login {
		margin: 0 1rem;
	}
	
	.buts {
		text-align: center;
	}
	
	.btn_login {
		margin-right: 1rem;
		margin-top: 1rem;
	}
	
	.btn_cancel {
		margin-top: 1rem;
	}
	
	.exit {
		color: red;
	}
</style>
