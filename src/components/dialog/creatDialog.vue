<template>
	<div class="dialog">
	    <div class="create-dialog">
	    	<h3>确定创建吗</h3>
			<div class="window create-window">
				<form>
					<input type="text" v-model="caseName" name="usecasename" placeholder="请输入用例名称" /><br>
					<button v-on:click="ensure">确认</button><button v-on:click="cancel">取消</button>
				</form>
			</div>
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
				caseIndex: '',
				caseName: ''
			}
		},
		props: ['show','choosedapiarr'],
		ready (){
			apilistEvent.on('choose',(index)=>{
				this.caseIndex = index;
			})
		},
		methods : {
			ensure : function(){
                event.preventDefault();
                apilistEvent.emit('create',this.caseIndex,this.caseName,this.choosedapiarr);
                this.show = false;
			},
			cancel : function(){
                event.preventDefault()
                this.show = false
			}
		}
	}
</script>
<style type="text/css" scoped>
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
	.create-dialog{
		position: relative;
		z-index: 3;
		width: 400px;
		height: 200px;
		background: #fff;
		text-align: center;
	}
	.create-dialog h3{
		height: 60px;
		line-height: 60px;
	}
    .window input{
    	width: 200px;
    	height: 35px;
    	line-height: 35px;
    	border-radius: 3px;
        border: 1px solid #ccc;
    }
    .window button{
    	width: 40px;
    	height: 35px;
    	line-height: 24px;
    	border: 1px solid #ccc;
    	background: #fff;
    	border-radius: 3px;
    	margin-top: 30px;
    	margin-right: 20px;
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