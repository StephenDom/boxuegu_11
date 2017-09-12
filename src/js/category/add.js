require('../common/aside');
require('../common/header');

/*
功能点
动态渲染顶级学科列表
监听form表单提交事件
*/


// 动态渲染顶级学科select
// 请求接口获取数据
// 得到数据渲染后的模板，插入页面指定位置

$.get('/v6/category/top', function(data) {
    if (data.code == 200) {
        $('#category-top-select').html(template('select-tpl', data.result));

    }
});


// 表单提交
//ajaxForm方法会判断你传入的数据类型，如果对象认为是配置，函数认为是成功回调
$("#category-add-form").ajaxForm(function(data) {
    if (data.code == 200) {
        alert('恭喜你');
    }
})