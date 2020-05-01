import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import SeeHomeLog from '@/components/home/SeeHomeLog.vue'
const routes = [{
	path: "/",
	redirect: "/home"
}, {
	path: "/home",
	component: () => import('@/components/home/Home.vue')
}, {
	path: "/time",
	component: () => import('@/components/time/Time.vue')
}, {
	path: "/log",
	component: () => import('@/components/log/Log.vue')
}, {
	path: "/say",
	component: () => import('@/components/say/Say.vue')
}, {
	path: "/aboutme",
	component: () => import('@/components/aboutMe/AboutMe.vue')
}, {
	path: "/home_release",
	component: () => import('@/components/home/HomeRelease.vue')
}, {
	path: '/mylog',
	name: 'see_home_log',
	component: SeeHomeLog
}]

const router = new VueRouter({
	mode: 'history',
	routes,
	// base:'/my/myblog/dist/'
})

export default router
