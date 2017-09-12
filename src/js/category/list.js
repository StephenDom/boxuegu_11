require('../common/aside');
require('../common/header');




/*
渲染学科列表
使用模板引擎得到数据渲染后的HTML，插入到页面指定的位置 

*/
$.get('/v6/category', function(data) {
    $(".table-bordered").append(template('category-list-tpl', data.result));
})