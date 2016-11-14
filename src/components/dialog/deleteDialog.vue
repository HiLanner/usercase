<template>
    <div>
    	<h3>确定删除吗</h3>
		<button v-on:click="ensure">确认</button><button v-on:click="cancel">取消</button>
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
			apilistEvent.on('choose',(data,index)=>{
				this.apilist = data;
				this.caseIndex = index;
				console.log(this.apilist + 'choose索引' + this.caseIndex);
			})
		},
		methods : {
			ensure (){
				console.log(this.apilist + 'delete索引' + this.caseIndex);
				apilistEvent.emit('delete',this.apilist,this.caseIndex)
			},
			cancel : function(){
                this.show = false;
			}
		}
	}
</script>