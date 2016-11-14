<template>
    <div class="dialog">
	    <div class="delete-dialog">
	    	<h3>确定删除吗</h3>
			<button v-on:click="ensure">确认</button><button v-on:click="cancel">取消</button>
		</div>
		<div class="overlay"></div>
    </div>
</template>

<script>
    import { apilistEvent } from '../../util/events'
	export default{
		data() {
			return {
				apilist: [],
				caseIndex: ''
			}
		},
		props: ['show','choosedapiarr'],
		ready (){
			apilistEvent.on('choose',(index)=>{
				this.caseIndex = index;
			})
		},
		methods : {
			ensure (){
				apilistEvent.emit('delete',this.caseIndex,this.choosedapiarr);
                this.choosedapiarr.splice(0,this.choosedapiarr.length);
                this.show = false;
			},
			cancel : function(){
                this.show = false;
			}
		}
	}
</script>
<style type="text/css" scoped>
    .dialog button{
    	width: 40px;
    	height: 35px;
    	line-height: 24px;
    	border: 1px solid #ccc;
    	background: #fff;
    	border-radius: 3px;
    	margin-top: 30px;
    	margin-right: 20px;
    }
    .dialog{
		position: fixed;
		border: 1px solid #e7e7e7;
		border-radius: 4px;
		box-shadow:1px 1px 6px #ddd,-1px -1px 6px #ddd;
		left: 50%;
		top: 50%;
		margin-left: -200px;
		margin-top: -100px;
		z-index: 2;
	}
	.delete-dialog{
		position: relative;
		z-index: 3;
		width: 400px;
		height: 200px;
		background: #fff;
		text-align: center;
	}
	.delete-dialog h3{
		height: 60px;
		line-height: 60px;
	}
    .overlay{
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: rgba(0,0,0,.8);
	    z-index: -1;
    }
</style>