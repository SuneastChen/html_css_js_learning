$.zxit={
	centerDiv:function(obj){
		obj.css({
			top:($(window).height()-div.height())/2,
        	left:($(window).width()-div.width())/2,
        	position:'absolute'
		})     //样式名可以不加引号
		return obj    //这样便可以进行链式操作
	}
}