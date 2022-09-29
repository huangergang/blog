var preArr = document.querySelectorAll(".language-java");
preArr.forEach(e => {
    e.classList.add("line-numbers");
});



var trs = document.querySelectorAll("tr");
for (var i = 0; i < trs.length; i++) {
    //为li注册鼠标进入事件
    trs[i].onmouseover = function() {
        this.style.backgroundColor = "#e3f7ee";
    };
    //为li注册鼠标离开事件
    trs[i].onmouseout = function() {
        this.style.backgroundColor = "";
    };
}


