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


var flag = true;

var ico = document.getElementById("bianhuan");
var Sreach = document.getElementById("Sreach");
var menu = document.getElementById("menu");



function fun(){
    if(flag){
        menu.style.display="none";
        Sreach.style.display="block";
        this.src="../web/image/ico/1.png";
        flag = false;
    }else{
        menu.style.display="block";
        Sreach.style.display="none";
        this.src="../web/image/ico/搜索2.png";
        flag = true;
}

}
ico.addEventListener("click",fun);
