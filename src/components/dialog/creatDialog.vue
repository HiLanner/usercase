<template>
	<h3>确定创建吗</h3>
	<div>
		<form>
			<input type="text" v-model="caseName" name="usecasename" placeholder="请输入用例名称" />
			<button v-on:click="ensure">确认</button><button v-on:click="cancel">取消</button>
		</form>
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
		props: ['show'],
		ready (){
			apilistEvent.on('choose',(data,index)=>{
				this.apilist = data;
				this.caseIndex = index;
			})
		},
		methods : {
			ensure : function(){
                event.preventDefault();
                console.log(this.apilist);
                apilistEvent.emit('create',this.apilist,this.caseIndex,this.caseName)
			},
			cancel : function(){
                event.preventDefault()
                this.show = false
			}
		}
	}
</script>