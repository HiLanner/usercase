<template>
	<div class="case">
		<ul class="case-ul">
		    <li v-on:click="showApi($index)">case0</li>
			<li v-for="case in cases" v-on:click="showApi($index)">
				{{case.name}}
			</li>
		</ul>
	</div>
</template>

<script>
    import {apilistEvent} from '../../util/events'
	export default{
		data : function(){
			return {
				cases:[
                { 
                	name: 'case1' ,
                	apilist: [{ href: '12323'},{ href: '1231'},{ href: '1231'},{ href: '1231'}]
                },
                {   name: 'case2' , 
                    apilist: [{ href: '1235'}]},
                {   name: 'case3' , 
                    apilist: [{ href: '1223'}]},
                {   name: 'case4' , 
                    apilist: [{ href: '1233'}]}
    		    ]
			}
		},
		ready() {
			
			apilistEvent.on('delete',(index,choosedapiarr)=>{
				choosedapiarr.reverse();
                for(var i = 0;i<choosedapiarr.length;i++){
					this.cases[index].apilist.splice(choosedapiarr[i], 1)
				 };

			});
			apilistEvent.on('create',(index,name,choosedapiarr)=>{
                console.log('index' + index + 'name' + name + 'choosedapiarr' + choosedapiarr);
                let newApiList = [];
                for( let i = 0;i < choosedapiarr.length;i++){
                	let apilistIndex = choosedapiarr[i];
                	newApiList.push({href: this.cases[index].apilist[apilistIndex].href});
                }
                console.log(newApiList);
                this.cases.push({ name , apilist: newApiList});
			})
		},
		methods: {
			showApi(index){
				if(index>=0){
					var apilist = this.cases[index].apilist
				    apilistEvent.emit('update',apilist,index)
				}else{
				    console.log("case0")
				}
			}
		}
	}
</script>

<style scoped>
	.case{
		flex: 0 1 auto;
		width: 200px;
		min-height: 200px;
		border: 1px solid #ddd;
		border-radius: 3px;
		margin-right: 20px;
	}
	.case ul li{
		text-indent: 10px;
		color: #666;
		line-height: 35px;
		cursor: pointer;
	}
	.case ul li:hover{
		background: #ddd;
		color: #fff;
	}
</style>