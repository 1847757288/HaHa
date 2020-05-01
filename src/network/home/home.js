import axios from './../request.js'

/**
 * 获取首页文章信息列表
 */
export function getHomeData() {
	return axios('home/get_home_data.php')
}

/**
 * 发布首页文章
 * @param {Object} title 文章的标题
 * @param {Object} text 文章的内容
 */
export function home_sub(title) {
	let params = new URLSearchParams()
	params.append('title', title)
	return axios.post("home/home_reales.php", params)
}

/**
 * 根据id返回首页日志详情
 * @param {Object} id
 */
export function GetHomeLogById(id){
	return axios({
		url:'home/homelog.php',
		params:{
			id
		}
	})
}

//app启动时,向服务器核对cookie以判断当前登录信息
export function GetUserInfo(){
	return axios({
		url:'home/getuserinfo.php'
	})
}

/**
 * post请求,用户登录行为,cheakeds为用户是否勾选记住密码
 */
export function sendcookie(id,pwd,cheakeds){
	return axios({
		url:'home/sendcookie.php',
		params:{
			id,
			pwd,
			yes:cheakeds?1:0
		}
	})
}

/**
 * 根据id删除首页的日志
 * @param {Object} id 要删除的首页日志的id
 */
export function DelHomeLog(id){
	return axios({
		url:'home/delhomelog.php',
		params:{
			id
		}
	})
}

/**
 * 下载首页日志
 * @param {Object} id 要下载的那个id
 * @param {Object} title 名字,绝定下载的文件名
 */
export function DownLoad(id,title){
	window.location.href='http://192.168.1.4:8888/my/myblog/home/getfile.php?id='+id+'&title='+title
}

/**
 * 上传文件,上传主页日志的封面
 * @param {Object} id 要上传封面的日志id
 */
// export function UPFM(id){
// 	return axios({
// 		url:'home/up_home_log_fm.php',
// 		params:{
// 			id
// 		}
// 	})
// }