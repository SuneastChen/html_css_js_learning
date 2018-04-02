
//1.直接给jquery定义全局函数
jQuery.myAlert=function(str){
	alert('我是通过调用插件的方式弹出的!'+str)
}


//2.用extend()方法
jQuery.extend({  //可放入多个全局函数,以供调用
	myAlert2:function(str){
		alert('我是通过extend()方法弹出的!'+str)
	},
	myAlert3:function(){
		alert('我是myAlert3函数!')
	}
})


//3.使用命名空间
jQuery.zxit={
	myAlert4:function(){
		alert('我是通过命名空间弹出的')
	}
	
}