$(document).ready(function () {
    var $category = $("ul li:gt(5):not(:last)");//选择第七个到倒数第二个元素
    $category.hide();//隐藏

    var $Btn = $(".showmore>a");//按钮
    $Btn.click(function () { 
        if($category.is(":visible")){
            $category.hide();
            $Btn.find("span").text("显示全部品牌");
           $("ul li").removeClass("promoted");
        }else{
            $category.show();
            $Btn.find("span").text("精简品牌");
            $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
					.addClass("promoted");
        }
        return false;
    });//事件
});