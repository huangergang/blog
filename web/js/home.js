// 搜索和登录边框样式
function headdiv3(){
    var actList = document.getElementsByClassName("actList");
    function over(){
        this.style.border="2px dotted white";
    } 
    function out(){
        this.style.border="0px";
    }
    for(var i=0;i<actList.length;i++){
       actList[i].onmouseover=over;
       actList[i].onmouseout=out;
    }
}
headdiv3();
