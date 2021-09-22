$(function() {
    var bannerSrc = ["images/banner0.png", "images/banner1.png", "images/banner2.png", "images/banner3.png"];
    var serverItem = [
        { itemSrc: "images/icon1.png", itmeTitle: "我是卖家", itemText: "shopcmd云电商解决方案，我们不仅仅是领先的独立商城建站系统。我们从互联网时代品牌建设和品牌营销的全新视角，赋予了品牌商城及独立电商更大的生存空间和存在价值!", itemBtn: "我要建站" },
        { itemSrc: "images/icon2.png", itmeTitle: "我是卖家", itemText: "shopcmd云电商解决方案，我们不仅仅是领先的独立商城建站系统。我们从互联网时代品牌建设和品牌营销的全新视角，赋予了品牌商城及独立电商更大的生存空间和存在价值!", itemBtn: "我要建站" },
        { itemSrc: "images/icon3.png", itmeTitle: "我是卖家", itemText: "shopcmd云电商解决方案，我们不仅仅是领先的独立商城建站系统。我们从互联网时代品牌建设和品牌营销的全新视角，赋予了品牌商城及独立电商更大的生存空间和存在价值!", itemBtn: "我要建站" }
    ];
    var recprdSrc = ["https://vd3.bdstatic.com/mda-mhqmveqwp24wu8uc/fhd/cae_h264_nowatermark/1629905741002387081/mda-mhqmveqwp24wu8uc.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1630754700-0-0-68f5126060df3fa7593a882b07e9b3d4&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000185_1",
        "https://vd4.bdstatic.com/mda-mgn3wcv2u7yz3jt4/fhd/cae_h264_nowatermark/1627015199457496235/mda-mgn3wcv2u7yz3jt4.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1630754832-0-0-278be50688a01c0ec9de37c9d3aafe67&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000185_1",
        "https://vd3.bdstatic.com/mda-kjcnvze1577tcfsh/sc/cae_h264_clips/mda-kjcnvze1577tcfsh.mp4?auth_key=1630754969-0-0-0e064de6cbfa49f55a1c889c5eb3ca03&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000185_1"
    ];
    var bannerIndex = 0;
    // 视频是暂停状态的
    var videoPlay = false;
    // 动态渲染banner图
    for (var i = 0; i < bannerSrc.length; i++) {
        // 模板字符串
        $(".banner-imgs").append(`<img src="${bannerSrc[i]}">`);
        $(".banner-btn").append(`<span>${i}</span>`);
        // 第一个的时候加上显示属性
        if (i == 0) {
            $(".banner-imgs img").addClass("select");
            $(".banner-btn span").addClass("select");
        }
    }
    // 轮播图的切换
    $(".banner-btn span").click(function() {
            // 每次点击同步显示图片的位置
            bannerIndex = $(this).index();
            console.log($(this).index());
            bannerMove();
        })
        // 自动轮播
    var bannerTime = setInterval(function() {
            // 限制 图片位置  3 0 
            bannerIndex++;
            // 到极限之后恢复到第一个位置
            if (bannerIndex > bannerSrc.length - 1) {
                bannerIndex = 0;
            }
            bannerMove();
        }, 3000)
        // 负责图片的切换
    function bannerMove() {
        // 删除所有img上面的class
        $(`.banner-imgs img`).removeClass();
        // 添加显示class
        $(`.banner-imgs img:eq(${bannerIndex})`).addClass("select");
        $(`.banner-btn span`).removeClass();
        $(`.banner-btn span:eq(${bannerIndex})`).addClass("select");
    }
    // 鼠标暂停 恢复动画
    $(".header-banner").hover(function() {
            // 放上去 清除定时器
            clearInterval(bannerTime);
        }, function() {
            // 移开 添加定时器
            bannerTime = setInterval(function() {
                // 限制 图片位置  3 0 
                bannerIndex++;
                // 到极限之后恢复到第一个位置
                if (bannerIndex > bannerSrc.length - 1) {
                    bannerIndex = 0;
                }
                bannerMove();
            }, 3000)
        })
        //左右按钮的切换
    $(".banner-btn1 img").click(function() {
            if ($(this).index() == 0) {
                console.log("点击了左边的");
                // 三元运算符 条件 ？ 成立 ：不成立 三目
                bannerIndex <= 0 ? bannerIndex = bannerSrc.length - 1 : bannerIndex--;
            } else {
                bannerIndex >= bannerSrc.length - 1 ? bannerIndex = 0 : bannerIndex++;
                console.log("点击了右边的");
            }
            bannerMove();
        })
        // 渲染服务板块
    for (var i = 0; i < serverItem.length; i++) {
        $(".server-item ul").append(`
        <li>
        <img src="${serverItem[i].itemSrc}" alt="">
        <h4>${serverItem[i].itmeTitle}</h4>
        <p>${serverItem[i].itemText}</p>
        <button>${serverItem[i].itemBtn}</button>
        </li>
        `)
    }
    // 渲染视频
    for (var i = 0; i < recprdSrc.length; i++) {
        $(".record-videos ul").append(`
        <li>
        <img src="images/suspend.png">
        <video src="${recprdSrc[i]}"></video>
        </li>
        `)
    }
    // $(".record-videos ul li").click(function() {
    //     // 判断当前为什么状态  true 播放 
    //     if (videoPlay) {
    //         // 暂停状态
    //         // 显示暂停的图片
    //         $(this).children("img").attr("src", "images/suspend.png");
    //         $(this).children("img").show();
    //         // 视频暂停
    //         $(this).children("video").trigger("pause");
    //         // 改变状态为暂停
    //     } else {
    //         //开始状态
    //         // 变成状态为开始
    //         // 开始播放视频
    //         $(this).children("video").attr("controls", "controls")
    //         $(this).children("video").trigger("play");
    //         // 显示开始按钮并慢慢 隐藏
    //         $(this).children("img").attr("src", "images/play.png");
    //         $(this).children("img").fadeOut();
    //     }
    //     videoPlay = !videoPlay;
    // })
    $(".record-videos ul li img").click(function() {
        $(this).next().trigger("play");
        $(this).attr("src", "images/play.png");
        $(this).fadeOut();
        $(this).next().attr("controls", "controls")
    })
    $(".record-videos ul li video").click(function() {
        $(this).trigger("pause");
        $(this).prev().attr("src", "images/suspend.png");
        $(this).prev().show();
        $(this).attr("controls", false);
    })

})