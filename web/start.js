
/*需要添加的文件目录，需要添加的样式目录*/
function ss(docDir, cssDir) {
    const fs = require("fs");

    /* 此函数将要追加的css样式追加到html*/

    function addCss(pathHtml, cssDir) {

        fs.readFile(pathHtml, "utf8", function (err, data) {

            fs.readdir(cssDir, function (err, dirs) {

                var paths = "";
                for (var i in dirs) {
                    var link = '\n<link rel="stylesheet" href="../../css/'+ dirs[i] + '">';
                    paths += link;
                }

                var arr = data.split("link");

                if (arr.length <= 1) {
                    const replaced = data.replace(/<\/head>/g, paths + "\n</head>");

                    fs.writeFile(pathHtml, replaced, 'utf-8', function (err) {
                        console.log(err);
                    });

                }
            });

        })
    }


    fs.readdir(docDir, function (err, dirs) {
        var pathHtmls = [];
        for (var i in dirs) {
            pathHtmls.push(docDir + dirs[i]);
        }

        pathHtmls.forEach(e => addCss(e, cssDir));
    })

};
ss("web/doc/book/", "web/css");