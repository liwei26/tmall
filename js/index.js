//下拉菜单

//顶部下拉菜单
function showSecMenu() {
    var dropDown = document.getElementsByClassName("drop-down");
    var hideBlock = document.getElementsByClassName("hide");
    for(var i = 0 ;i < dropDown.length; i++ ){
        dropDown[i].onmouseover = function (){
            this.style.background = "#fff";
            var hide = this.lastElementChild;
            hide.style.display = "block";
        };
        dropDown[i].onmouseout = function(){
            this.style.background = "#f2f2f2";
            var hide = this.lastElementChild;
            hide.style.display = "none";
        };
    }
    for(var j = 0; j < hideBlock.length; j++){
        hideBlock[j].onmouseover = function (){
            this.style.display = "block"
        };
        hideBlock[j].onmouseout = function (){
            this.parentNode.style.background = "#f2f2f2";
            this.style.display = "none"
        }
    }
}

// 右侧下拉菜单
function showSidebar() {
    var timer = null;
    var rightItem = document.getElementsByClassName("right-item");
    var hideT = document.getElementsByClassName("hide-tab");
    for(var i = 0 ;i < rightItem.length; i++ ){
        rightItem[i].onmouseover = function(){

            var hideTab = this.firstElementChild;
            hideTab.style.display = "block";
        };
        rightItem[i].onmouseout = function(){
            var that = this;
            timer = setTimeout(
                function () {
                    var hideTab = that.firstElementChild;
                    hideTab.style.display = "none";
                },500);

            for(var j = 0 ; j < hideT.length;j++){
                hideT[j].onmouseover = function(){
                    clearTimeout(timer);
                    this.style.display = "block"
                };
                hideT[j].onmouseout = function () {
                    var it = this;
                    timer = setTimeout(
                        function () {
                            it.style.display = "none"
                        },200)
                }
            }
        }
    }

}

function changeIconColor(){
    var trolley = document.getElementById("trolley");
    trolley.onmouseover = function () {
        this.firstElementChild.style.color = "#fff"
    };
    trolley.onmouseout = function () {
        this.firstElementChild.style.color = "#ff0036"
    }
}

//弹出列表详情

function showListItemDetail() {
    var itemHtmlUrl = [
        "../html/0.html" ,
        "../html/1.html" ,
        "../html/2.html" ,
        "../html/3.html" ,
        "../html/4.html" ,
        "../html/5.html" ,
        "../html/6.html" ,
        "../html/7.html" ,
        "../html/8.html" ,
        "../html/9.html" ,
        "../html/10.html" ,
        "../html/11.html" ,
        "../html/12.html" ,
        "../html/13.html" ,
        "../html/14.html" ,
        "../html/15.html"
    ];
    var listItem = document.getElementById("list-item");
    var listItemUl = document.getElementById("list-item-ul");
    var listItemLi = listItemUl.children;
    var listItemDetail = document.getElementsByClassName("list-item-detail")[0];
    var timer = null ;
    for(var i = 0; i < listItemLi.length; i++){
        listItemLi[i].onmouseover = function () {
            var xuhao = this.id;
            Ajax(listItemDetail,itemHtmlUrl[xuhao]);
            var leiming = this.className;
            var listText = this.children;
            function yanse(color) {
                for (var j = 0; j < listText.length; j++) {
                    listText[j].style.color = color;
                }
            }
            switch (leiming){
                case 'girls': yanse("#e54077"); break;
                case 'boys': yanse("#427def"); break;
                case 'garnish': yanse("#6347ed"); break;
                case 'baby': yanse("#fa5c5c"); break;
                case 'foods': yanse("#f7a831"); break;
                case 'home': yanse("#dd2727"); break;
                case 'health': yanse("#3bc7b0"); break;
            }
            listItemDetail.style.display = "block";
            this.style.background = "#fff";
            this.style.fontWeight = "700";
        };

        listItemLi[i].onmouseleave = function () {
            var that = this;
            timer = setTimeout(
                function () {
                    var listText = that.children;
                    that.style.background = "none";

                    that.style.fontWeight = "500";
                    for (var j = 0; j < listText.length; j++) {
                        listText[j].style.color = "#fff";
                    }
                    listItemDetail.style.display = "none";
                },300);

            listItemDetail.onmouseover = function () {
                clearTimeout(timer);
                this.style.display = "block";
            };
            listItemDetail.onmouseleave = function () {
                timer = setTimeout(
                    function () {
                        var listText = that.children;
                        that.style.background = "none";
                        that.style.fontWeight = "500";
                        for (var j = 0; j < listText.length; j++) {
                            listText[j].style.color = "#fff";
                        }
                        listItemDetail.style.display = "none";
                    },200);
            }
        };

    }

}

//轮播图

function sliderImg() {
    var banner = document.getElementsByClassName("banner")[0];
    var bannerUl = document.getElementsByClassName("banner-img")[0];
    var bannerImg = bannerUl.children;
    var bannerIcon = document.getElementsByClassName("banner-icon")[0];
    var bannerBtn = bannerIcon.children;
    var bannerContent = document.getElementsByClassName("banner-content")[0];
    var index = 0;
    var timer;
    var bjs = [
        "#e1c08b" ,
        "#e8e8e8" ,
        "#f5e3d9" ,
        "#e8e8e8" ,
        "#0a0b27" ,
        "#b32233"
    ];
    //为列表每项添加背景图片
    for (var i = 0; i < bannerImg.length; i++){
        bannerImg[i].style.background = "url(../images/banner/" + i + ".jpg) repeat-x center";
    }
    // 运动函数
    function animate(obj,offset) {
        var objStyle;
        if (getComputedStyle) {
            //非IE
            objStyle = window.getComputedStyle(obj, null);
        }
        else {
            //IE
            objStyle = obj.currentStyle;
        }

        var newLeft = parseInt(objStyle.left) + offset;
        while (newLeft < -6000) {
            newLeft = 0;
        }
        obj.style.left = newLeft + 'px';

    }
    function bannerBtnShow() {
        for (i = 0; i < bannerBtn.length; i++) {
            if (bannerBtn[i].id = "special") {
                bannerBtn[i].id = "";
            }
        }
        bannerBtn[index].id = "special";
        bannerContent.style.background = bjs[index];
    }
    function btnMove() {
        index += 1;
        if (index > 5) {
            index = 0
        }
        bannerBtnShow();
    }
    // 图片动起来
    function play() {
        clearTimeout(timer);
        timer = setInterval(function () {
                animate(bannerUl , -1200);
                btnMove();
            }, 2000);

        }
    function stop() {
            clearTimeout(timer);
       }
    //   手动选择图片
    function aaa() {
        for (var j = 0; j < bannerBtn.length; j++) {
            (function(j) {

                bannerBtn[j].onmouseover = function() {
                    var focusIndex = parseInt(this.getAttribute('index'));
                    console.log(j);
                    var offset = -1200 * (index - focusIndex);
                    console.log(offset);

                    animate(bannerUl, offset);

                    index = focusIndex;
                    bannerBtnShow();
                }
            })(j)
        }
    }
    banner.onmouseover = stop;
    banner.onmouseout = play;
    play();
    aaa();
}

//改变换一批样式
function changerefresh() {
    var refreshIcon = document.getElementById("refresh");
    refreshIcon.onmouseover = function (){
        this.firstElementChild.style.color = "#fff";
    };
    refreshIcon.onmouseout = function (){
        this.firstElementChild.style.color = "#999"
    }
}


//动态加载新内容
function addNewContent() {
    var floor = document.getElementsByClassName("floor")[0];
    var maybeLike = document.getElementsByClassName("maybe-like")[0];

    window.onscroll = function () {
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollT > 800){
            Ajax(floor,"../html/floor.html");
        }
        if (scrollT > 5800){
            Ajax(maybeLike,"../html/maybelike.html");
        }

    };
}
// function search() {
//     window.onscroll = function () {
//         // console.log(scrollT);
//         var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
//         var searchTop = document.getElementsByClassName("search-top")[0];
//         if(scrollT > 1300){
//             searchTop.style.display = "block";
//         }
//         if(scrollT <800){
//             searchTop.style.display = "none";
//         }
//     }
//
// }


addLoadEvent(showSecMenu);
addLoadEvent(showSidebar);
addLoadEvent(changeIconColor);
addLoadEvent(showListItemDetail);
addLoadEvent(sliderImg);
addLoadEvent(changerefresh);
addLoadEvent(addNewContent);
addLoadEvent(scroll);