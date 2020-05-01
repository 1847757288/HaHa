<!-- 展示某一篇具体的首页文章 -->
<template>
	<div class="see_home_log" v-highlight>
		<mavon-editor 
		class="md" 
		:value="md" 
		:subfield=false 
		defaultOpen='preview' 
		:toolbarsFlag=false 
		:editable=false 
		:scrollStyle=true
		:ishljs =true
		></mavon-editor>
		<span v-if="$store.state.user_info==false"></span>
		<flybut v-else @del='del' @download='download' :id='id'></flybut>
		<!-- <el-button icon="el-icon-delete" round class="del_btn" @click='del'></el-button>
		<el-button type="primary" icon="el-icon-download" @click='download()' circle></el-button> -->
	</div>
</template>

<script>
	import {
		GetHomeLogById,
		DelHomeLog,
		DownLoad
	} from '@/network/home/home.js'
	
	import flybut from './FlyBut.vue'
	
	export default {
		components:{
			flybut
		},
		created() {
		},
		methods: {
			download(){
				if (this.$store.state.user_info == false) {
					this.$message({
						type: 'error',
						message: '请先登录!',
						duration: 1000
					})
					return
				}
				this.$confirm('确定下载?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					lockScroll: false
				}).then(() => {
					DownLoad(this.$route.params.arr[0],this.$route.params.arr[1])
				}).catch(() => {});
				
			},
			del() {
				if (this.$store.state.user_info == false) {
					this.$message({
						type: 'error',
						message: '请先登录!',
						duration: 1000
					})
					return
				}
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					lockScroll: false
				}).then(() => {
					DelHomeLog(this.$route.params.arr[0]).then(data => {
						if (data.data == 'ok') {
							this.$message({
								type: 'success',
								message: '删除成功!',
								duration: 1000
							})
							this.$router.push('/home')
						} else {
							this.$message({
								type: 'error',
								message: '删除失败!',
								duration: 1500
							})
						}
					})
				}).catch(() => {});
			},
		},
		data() {
			return {
				md: this.$route.params.arr?this.$route.params.arr[3]:'',
				id:this.$route.params.arr?this.$route.params.arr[0]:-1,
			}
		}
	}
</script>

<style scoped>
	.see_home_log {
		position: relative;
	}

	.home_log_header {
		padding: 0.5rem 1rem;
	}

	.home_log_body {
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}

	.home_log_body p {
		text-indent: 2rem;
		padding: 0.5rem 0;
	}

	.del_btn {
		position: absolute;
		right: 0;
	}

	.home_log_img {
		width: 100%;
	}

	.home_log_img img {
		max-width: 100%;
	}
</style>
