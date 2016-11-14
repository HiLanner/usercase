<template>
    <h3>apiList</h3>
	<form class="editor-form">
	    <ul>
	    	<li v-for="api in apilist">
	    		<input type="checkbox" :value="$index" v-model="choosedApiArr"/>
	    		<label for="{{api.href}}">{{api.href}}</label><button>编辑</button>
	    	</li>
	    </ul>
		<div class="btn" v-on:click="showDialog"><button name="deleteApi">删除</button><button name="newCase">新建</button><button name="executeApi">执行</button></div>
	</form>
	<delete-dialog :show.sync="showDeleteDialog" :choosedapiarr="choosedApiArr" v-show="showDeleteDialog"></delete-dialog>
	<creat-dialog :show.sync="showCreatDialog" :choosedapiarr="choosedApiArr" v-show="showCreatDialog"></creat-dialog>
</template>

<script>
	import { apilistEvent } from '../../util/events'
	import deleteDialog from '../dialog/deleteDialog'
	import creatDialog from '../dialog/creatDialog'

	export default{
		data (){
		    return {
		    	apilist: [],
		    	caseIndex: '',
		    	choosedApiArr: [],
		    	showDeleteDialog: false,
		    	showCreatDialog: false
		    }
		},
		components:{
			deleteDialog,
			creatDialog
		},
		ready (){
			
			apilistEvent.on('update',(data,index)=>{
				this.apilist = data;
				this.caseIndex = index;
                this.choosedApiArr.splice(0,this.choosedApiArr.length)
			})
		},
		methods : {
			deleteApi : function(){
				if (this.choosedApiArr.length == 0) {
					alert("请选择要删除的api")
				}else{
					this.showDeleteDialog = true;
					apilistEvent.emit('choose',this.caseIndex)
				}
			},
			creatUsecase : function(){
				if (this.choosedApiArr.length == 0) {
					alert("选择的api不能为空")
				}else{
					this.showCreatDialog = true;
					apilistEvent.emit('choose',this.caseIndex)
				}
			},
			execApi : function(){
				console.log("执行API")
			},
			showDialog : function(event){
				event.preventDefault();
				
                switch(event.target.name)
                {
                	case 'deleteApi':
                	  this.deleteApi()
                	break;
                	case 'newCase':
                	  this.creatUsecase()
                	break;
                	case 'executeApi':
                	  this.execApi()
                	break;
                }

			}
		}
	}
</script>

<style type="text/css">
	h3{
		text-align: center;
	}
    .editor-form ul li{
    	height: 40px;
    	line-height: 40px;
    	border-bottom: 1px solid #e7e7e7;
    	position: relative;
    	font-size: 16px;
    }
    .editor-form ul li:last-child{
    	border-bottom: none;
    }
    .editor-form ul li button{
        position: absolute;
        right: 0px;
        margin-top: 10px;
    }
    .btn{
    	position: absolute;
    	bottom: 20px;
    	text-align: center;
    	width: 100%;
    }
    .btn button{
    	margin-right: 15px;
    	width: 40px;
    	height: 30px;
    	background: #fff;
    	border: 1px solid #d7d7d7;
        border-radius: 4px;
    }
</style>