<template>
	<div class="top-bar">
		<input type="text" placeholder="搜索"／>
	</div>
</template>

<script>
	export default{
		data: function(){
			return{
				msg:'top-bar'
			}
		}
	}
</script>

<style scoped>
	.top-bar{
		height: 45px;
		width: 1000px;
		margin:0 auto;
		line-height: 45px;
	}
	.top-bar input{
		width: 180px;
		height: 20px;
		float: right;
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin-top: 15px;
	}
</style>
