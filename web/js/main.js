$(function(){
    var bannerSrc=["images/banner0.png","images/banner1.png","images/banner2.png","images/banner3.png"];
    var serverItem=[
        {itemSrc:"images/icon1.png",itemTitle:"我是卖家",itemText:"shopcmd云电商解决方案，我们不仅仅是领先的独立商城建站系统。我们从互联网时代品牌建设和品牌营销的全新视角，赋予了品牌商城及独立电商更大的生存空间和存在价值！",itemBtn:"我要建站"},
        {itemSrc:"images/icon2.png",itemTitle:"我要营销",itemText:"云道不断完善的营销系统，联合优质媒体资源，集成常用的网络营销模式及终端，以最简单的产品形态，帮助独立商城实现店铺及商品信息在全网的快速分销。！",itemBtn:"我要推广"},
        {itemSrc:"images/icon3.png",itemTitle:"媒体合作",itemText:"真正的全民营销时代，无需学习，无需维护。通过为亲人网站、朋友圈、媒体流量、移动展现、媒体解决方案获取收益。我们致力于实现合作媒体流量价值的最大化。",itemBtn:"我要合作"}
    ];
    var recprdSrc=[
        "https://vd3.bdstatic.com/mda-mfn3k84fdpmg3anx/sc/cae_h264_clips/1624416375889562230/mda-mfn3k84fdpmg3anx.mp4?auth_key=1631619733-0-0-05fd982eeb8f21601aa26f18b8a14c6d&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=",
        "https://vd4.bdstatic.com/mda-mgn265jbn5q57rhs/sc/cae_h264_clips/1627005085856402987/mda-mgn265jbn5q57rhs.mp4?auth_key=1631623274-0-0-15265df166dde6eb56f1e9d1b6e91636&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=",
        "https://vd3.bdstatic.com/mda-jk1veda433avksd2/sc/mda-jk1veda433avksd2.mp4?v_from_s=hkapp-haokan-suzhou&amp;auth_key=1631803258-0-0-e50abe706f72155c6168e0d2d8901a25&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest="
    ];
    var bannerIndex=0; 
    var videoPlay=false; //原始值：假
    // 动态渲染banner轮播图
    for(var i=0;i<bannerSrc.length;i++){
        // 下面是原来写法
    //    $(".banner-imgs").append("<img src="+bannerSrc[i]+">")
        // 模板字符串
        $(".banner-imgs").append(`<img  src="${bannerSrc[i]}">`);
        $(".banner-btn").append(`<span>${i}</span>`);
        if(i==0){
            $(`.banner-imgs img`).addClass("select");
            $(`.banner-btn span`).addClass("select")
        }
    }
    // 轮播图的切换
    $(".banner-btn span").click(function(){
        //每次点击后，同步显示图片的索引位置
        bannerIndex=$(this).index();
        console.log($(this).index());
        bannerMove();
    })
    // 自动轮播
    var bannerTime=setInterval(function(){
        //限制图片位置，让其循环播放
        bannerIndex++;
        if(bannerIndex>bannerSrc.length-1){
            bannerIndex=0;
        }
        bannerMove();
    },1500)
    // 负责图片的切换，用函数封装
    function bannerMove(){
        // 删除imgs上面的所有class
        $(`.banner-imgs img`).removeClass();
        // 再次添加显示class
        $(`.banner-imgs img:eq(${bannerIndex})`).addClass("select")
        $(`.banner-btn span`).removeClass();
        $(`.banner-btn span:eq(${bannerIndex})`).addClass("select")
    }
    // 鼠标暂停与恢复动画
    $(".header-banner").hover(function(){
        // 鼠标放上去，清除定时器
        clearInterval(bannerTime);
    },function(){
        // 移开，添加定时器
        bannerTime=setInterval(function(){
            //限制图片位置，让其循环播放
            bannerIndex++;
            if(bannerIndex>bannerSrc.length-1){
                bannerIndex=0;
            }
            bannerMove();
        },1500)
    })
    // 左右按钮的切换
    $(".banner-btn1 img").click(function(){
        if($(this).index()==0){
            // 三元/三则/三目运算符 条件 ？ 若条件成立执行 ：不成立则执行
            bannerIndex<=0?bannerIndex=bannerSrc.length-1:bannerIndex--;
        }else{
            bannerIndex>=bannerSrc.length-1?bannerIndex=0:bannerIndex++;
        }
        bannerMove();
    })
    // 渲染服务版块
    for(var i=0;i<serverItem.length;i++){
        $(".server-item ul").append(`
            <li>
                <img src="${serverItem[i].itemSrc}" alt="">
                <h4>${serverItem[i].itemTitle}</h4>
                <p>${serverItem[i].itemText}</p>
                <button>${serverItem[i].itemBtn}</button>
            </li>  
        `)
    }
    //渲染视频
    for(var i=0;i<recprdSrc.length;i++){
        $(".record-videos ul").append(`
        <li>
        <img src="images/suspend.png">
        <video src="${recprdSrc[i]}"></video>
        </li>
        `)
    }
    // console.log(".record-videos ul>li>img")
    // $(".record-videos ul>li>img").click(function(){
    //     if(videoPlay==true){
            // 判断为真，attr将src改为，suspend暂停状态
    //     console.log($(this).attr("src","images/suspend.png"));
    //     $(this).next().trigger("pause");
    // }else{
            // 判断为假，attr将src改为，play播放状态
    //     console.log($(this).attr("src","images/play.png"));
    //     $(this).next().trigger("play");
    // }
    // 假变真或真变假，开关
    // videoPlay=!videoPlay  
    // })

    // $(".record-videos ul li").click(function(){
    //     if(videoPlay==true){
    //         $(this).children("img").attr("src","images/suspend.png");
    //         $(this).children("video").trigger("pause");
    //         $(this).children("video").removeAttr("controls");
    //         $(this).children("img").show();
    //         videoPlay=false;
    //     }else{
    //         videoPlay=true; 
    //         $(this).children("video").trigger("play");
    //         $(this).children("img").attr("src","images/play.png");
    //         $(this).children("img").fadeOut();
    //         $(this).children("video").attr("controls","controls");
    //     }
    // })

    $(".record-videos ul li img").click(function(){
        $(this).next().trigger("play");
        $(this).attr("src","images/play.png");
        $(this).fadeOut();
        $(this).next().attr("controls","controls")
    }) 
    $(".record-videos ul li video").click(function(){
        $(this).trigger("pause");
        $(this).prev().attr("src","images/suspend.png");
        $(this).prev().show();
        $(this).attr("controls",false)
    })
})