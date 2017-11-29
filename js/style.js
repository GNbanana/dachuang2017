/* 轮播图 */
jQuery(function($){
    var index = 0;
    var maximg = 3;

    //滑动导航改变内容
    $(".bannerNav li").hover(function(){
        if(MyTime){
            clearInterval(MyTime);
        }
        index  =  $(".bannerNav li").index(this);
        MyTime = setTimeout(function(){
            ShowjQueryFlash(index);
            $('.bannerContent').stop();
        } , 400);

    }, function(){
        clearInterval(MyTime);
        MyTime = setInterval(function(){
            ShowjQueryFlash(index);
            index++;
            if(index==maximg){index=0;}
        } , 2500);
    });
    //滑入 停止动画，滑出开始动画.
    $('.bannerContent').hover(function(){
        if(MyTime){
            clearInterval(MyTime);
        }
    },function(){
        MyTime = setInterval(function(){
            ShowjQueryFlash(index);
            index++;
            if(index==maximg){index=0;}
        } , 3000);
    });
    //自动播放
    var MyTime = setInterval(function(){
        ShowjQueryFlash(index);
        index++;
        if(index==maximg){index=0;}
    } , 2500);
});
function ShowjQueryFlash(i) {
    $(".bannerContent div").eq(i).animate({opacity: 1},1000).css({"z-index": "1"}).siblings().animate({opacity: 0},1000).css({"z-index": "0"});
    $(".bannerNav li").eq(i).addClass("current").siblings().removeClass("current");
}

/* 设置banner图片大小 */
$(function () {
    refresh_banner();
    refresh_good_img();
    refresh_pageList();

    $(window).resize(function () {
        refresh_banner();
        refresh_good_img();
        refresh_pageList();
    });
});

function refresh_banner(){
    var window_width = $(window).width();
    var banner_img = $(".bannerImg img");
    var banner_div = $(".bannerDiv");

    banner_img.height(window_width * (350 / 1000));
    banner_img.width(window_width);

    var banner_div_height =banner_img.height();
    var banner_div_width = window_width;

    banner_div.height(banner_div_height);
    banner_div.width(banner_div_width);
}

function refresh_good_img(){
    var window_width = $(window).width();
    var good_img = $(".good_img img");
    var good_div = $(".good_img");

    good_img.height(window_width * 0.8 * (218 / 250));
    good_img.width(window_width * 0.8);

    var good_div_height =good_img.height();
    var good_div_width = good_img.width();

    good_div.height(good_div_height);
    good_div.width(good_div_width);
}


/* 登录注册 */
$(".user").click(function(){
    $(".signIn").show("fast");
});

$(".close").click(function(){
    $(".signIn").hide("fast");
});


/* 消息列表高度 */
function refresh_pageList(){
    var window_height = $(window).height();
    var page_list = $(".page_list");
    var chat_container = $(".chat_container");
    var chat_input = $(".chat_input").height();

    page_list.height(window_height - 50);
    chat_container.height(window_height - 50 - chat_input);
}

/*  切换好友列表页面  */
$(".friend_icon").click(function(){
    $(".message_page").animate({left:"100%"}, 200);
    $(".friend_page").animate({left:"0"}, 200);
});

$(".return_message").click(function(){
    $(".message_page").animate({left:"0"}, 200);
    $(".friend_page").animate({left:"-100%"}, 200);
});

/*  切换新家好哟普页面  */
$(".new_friend_icon").click(function(){
    $(".message_page").animate({right:"100%"}, 200);
    $(".new_friend_page").animate({right:"0"}, 200);
});

$(".new_return_message").click(function(){
    $(".message_page").animate({right:"0"}, 200);
    $(".new_friend_page").animate({right:"-100%"}, 200);
});

$(".plus_icon").click(function(){
    $(".add_fri").show(300);
    $(".mask").show(300);
});

$(".add_close").click(function(){
    $(".add_fri").hide(300);
    $(".mask").hide(300);
});

/*    修改信息   */
$(".change_userImg").click(function(){
    $(".change_userImg_div").show("fast");
});

$(".change_img_close").click(function(){
    $(".change_userImg_div").hide("fast");
});

$(".change_userInfo").click(function(){
    $(".change_userInfo_div").show("fast");
});

$(".change_info_close").click(function(){
    $(".change_userInfo_div").hide("fast");
});


//设置 textarea 的高度随着 内容 增加 自适应
$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});