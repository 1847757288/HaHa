import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'

//导入hightlightjs
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

//导入一个文本编辑器
import mavonEditor from 'mavon-editor'
Vue.use(mavonEditor)

//配置hightlightjs
Vue.directive('highlight', function(el) {
	let blocks = el.querySelectorAll('pre');
	blocks.forEach((block) => {
		hljs.highlightBlock(block)
	})
})

//挂在全局变量
import global from './Global.js'
Vue.prototype.$global=global

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
