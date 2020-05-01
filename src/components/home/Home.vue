<!-- 主页 -->
<template>
	<div id="home">
		<me></me>
		<home-time></home-time>
	</div>
</template>

<script>
	
import me from './Me.vue'
import homeTime from './content.vue'
export default{
	components:{
		me,
		homeTime
	}
}
</script>

<style>
</style>
