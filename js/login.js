/**
 * Created by 小小莫先森 on 2017/2/24.
 */
$(function(){
    //窗口效果
    //点击登录class为显示
    $("#loginShow").click(function(){
        if(openLoadingNew==1){
            //$("#gray").show();
            //$("#popup").show();//查找ID为popup的DIV show()显示#gray
            // tc_center();
			var url="login.html"
			$(this).attr("href",url);
        }
        else{
            $("#loading").css({"transform":"rotateY(360deg)","transition":"transform 2s"});
            alert("很抱歉，请开启新纪元后再尝试操作！");

        }
    });
    //点击关闭按钮
    $("a.guanbi").click(function(){
        $("#gray").hide();
        $("#popup").hide();//查找ID为popup的DIV hide()隐藏
    })

    //窗口水平居中
    $(window).resize(function(){
        tc_center();
    });

    function tc_center(){
        var _top=($(window).height()-$(".popup").height())/2-100;
        var _left=($(window).width()-$(".popup").width())/2;

        $(".popup").css({top:_top,left:_left});
    }


    //立即注册1 弹窗状态下
    $("#registerNow").click(function () {
        if(openLoadingNew==1){
            var url="Register/register.html";
            $("#right_iframe").attr("src",url);
            $("#loadMain").css({"top":"-880px","transition":"top 1s"});
            $("#gray").fadeToggle();
            $("#popup").fadeToggle();
        }
        else{
            $("#loading").css({"transform":"rotateY(360deg)","transition":"transform 2s"});
            alert("很抱歉，请开启新纪元后再尝试操作！");
        }
    })
    //立即注册2 非弹窗状态下
    $("#registerShow").click(function () {
        if(openLoadingNew==1){
            var url="Register/register.html";
            $("#right_iframe").attr("src",url);
            $("#loadMain").css({"top":"-880px","transition":"top 1s"});
            $("#gray").fadeOut();
            $("#popup").fadeOut();
        }
        else{
            $("#loading").css({"transform":"rotateY(-360deg)","transition":"transform 2s"});
            alert("很抱歉，请开启新纪元后再尝试操作！");
        }

    })
})

//
//$(document).ready(function(){
//
//    $(".top_nav").mousedown(function(e){
//        $(this).css("cursor","move");//改变鼠标指针的形状
//        var offset = $(this).offset();//DIV在页面的位置
//        var x = e.pageX - offset.left;//获得鼠标指针离DIV元素左边界的距离
//        var y = e.pageY - offset.top;//获得鼠标指针离DIV元素上边界的距离
//        $(document).bind("mousemove",function(ev){ //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
//
//            $(".popup").stop();//加上这个之后
//
//            var _x = ev.pageX - x;//获得X轴方向移动的值
//            var _y = ev.pageY - y;//获得Y轴方向移动的值
//
//            $(".popup").animate({left:_x+"px",top:_y+"px"},10);
//        });
//
//    });
//
//    $(document).mouseup(function() {
//        $(".popup").css("cursor","default");
//        $(this).unbind("mousemove");
//    });
//})
