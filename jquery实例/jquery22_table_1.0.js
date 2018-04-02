;(function($){
	$.fn.table=function(options){
		var defaults={
			//各种属性,各种参数
			evenRowClass:'evenRow',
			oddRowClass:'oddRow',
			currentRowClass:'currentRow',     //注意加逗号
			//参数的值可随时更改,自定义
			//evenType1:'click',
			evenType1:'mouseover',
			evenType2:'mouseout'
		}
		var options=$.extend(defaults,options);
		this.each(function(){
			//实现功能代码
			var _this=$(this)   //将$(this)变为缓存
			//偶数行
			_this.find('tr:even').addClass(options.evenRowClass);
			//奇数行
			_this.find('tr:odd').addClass(options.oddRowClass);


			//实际开发中,不用此方法,用底层的bind()
			// _this.find('tr').mouseover(function(){
			// 	$(this).addClass(options.currentRowClass);	
			// })
			// _this.find('tr').mouseout(function(){
			// 	$(this).removeClass(options.currentRowClass);	
			// })
			


			//用bind(),将事件作为参数传入
			_this.find('tr').bind(options.evenType1,function(){
				$(this).addClass(options.currentRowClass);
			})
			_this.find('tr').bind(options.evenType2,function(){
				$(this).removeClass(options.currentRowClass);
			})


		});
		return this;
	}
})(jQuery);
