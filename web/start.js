/*需要添加的文件目录，需要添加的样式目录*/
function ss(docDir, cssDir) {
    const fs = require("fs");

    /* 此函数将要追加的css样式追加到html*/

    function addCss(pathHtml, cssDir) {


        fs.readFile(pathHtml, "utf8", function (err, data) {

            fs.readdir(cssDir, function (err, dirs) {

                var paths = "";
                for (var i in dirs) {
                    var link = '\n<link rel="stylesheet" href="../../css/docCss/' + dirs[i] + '">';
                    paths += link;
                }

                var arr = data.split("<link");

                if (arr.length === 1) {
                    var replaced = data.replace(/<\/head>/g, paths + "\n</head>");
                    fs.writeFile(pathHtml, replaced, 'utf-8', function (err) {
                        console.log(pathHtml);
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


        for (var i in pathHtmls) {
            addCss(pathHtmls[i], cssDir);
        }

        console.log(pathHtmls);
    })

};

function jss(docDir, jsDir) {
    const fs = require("fs");

    /* 此函数将要追加的css样式追加到html*/

    function addJs(pathHtml, jsDir) {


        fs.readFile(pathHtml, "utf8", function (err, data) {

            fs.readdir(jsDir, function (err, dirs) {

                var paths = "";
                for (var i in dirs) {
                    var scripts = '\n<script src="../../js/docJs/' + dirs[i] + '"></script>';
                    paths += scripts;
                }

                var arr = data.split("<script");

                if (arr.length === 1) {
                    const replaced = data.replace(/<\/html>/g, paths + "\n</html>");

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

        pathHtmls.forEach(e => addJs(e, jsDir));
    })

};

ss("web/doc/book/", "web/css/docCss/");
ss("web/doc/computer/", "web/css/docCss/");
ss("web/doc/english/", "web/css/docCss/");
ss("web/doc/math/", "web/css/docCss/");

jss("web/doc/book/","web/js/docJS/");
jss("web/doc/computer/", "web/js/docJS/");
jss("web/doc/english/","web/js/docJS/");
jss("web/doc/math/","web/js/docJS/");

