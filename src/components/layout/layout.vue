<template>
    <topbar></topbar>
    <div class="container">
		<usecaselist></usecaselist>
		<div class="api-list">
			<api-list></api-list>
		</div>
    </div>
</template>

<script>
	import topbar from './topbar.vue'
	import usecaselist from './usecaselist.vue'
	import apiList from './apilist.vue'
	export default{
	  components: {
	    topbar,
	    usecaselist,
	    apiList
	  },
	  data () {
	    return {
	      msg: 'vue'
	    }
	  },
	  ready () {
	  }
	}
</script>

<style>
    ul{
    	padding-left: 0;
    	margin: 0;
    }
    li{
    	list-style: none;
    }
	.container{
		padding-top: 15px;
		display: flex;
		display: -webkit-flex;
		flex: row nowrap;
		-webkit-flex: row nowrap;
		justify-content: space-between;
		align-items: flex-start;
		width: 1000px;
		margin: 0 auto;
	}
	.api-list{
		padding: 0 15px;
		width: 600px;
		min-height: 600px;
		border: 1px solid #ddd;
		border-radius: 3px;
		position: relative;
		vertical-align: top;
		flex: 1 1 auto;
	}
</style>