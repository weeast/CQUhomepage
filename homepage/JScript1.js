// JScript source code
function LinkWordOut(obj) {
    obj.style.color = "#7A7A7A";
}
function BannerButtonOn(obj) {
    obj.style.color = "#13529A";
    obj.style.backgroundImage = "url(bannerMouseOn.gif)";
}
function BannerButtonOut(obj) {
    obj.style.color = "#5A90C9";
    obj.style.backgroundImage = "url(bannerNormal.gif)";
}
function ChangeButtonOn(obj) {
    obj.style.backgroundImage = "url(changeButtonOn.png)";
}
function ChangeButtonOut(obj) {
    obj.style.backgroundImage = "url(changeButtonNormal.png)";
}
function MoreChange(obj) {
    obj.style.color = "#1A5A9D";
}
function HeddenOn(obj) {
    var n = obj.id;
    var node = document.getElementById("hedden-part" + n);
    node.style.display = "block";
}
function HeddenOut(obj) {
    var n = obj.id;
    var node = document.getElementById("hedden-part" + n);
    node.style.display = "none";
}
function onHeddenOut(obj) {
    obj.style.display = "none";
}
function onHeddenOn(obj) {
    obj.style.display = "block";
}
function ChangeClick(obj) {
    var mynode = obj;
    var n = mynode.firstChild.nodeValue;
    var m = FindDisplayOn();
    var node1 = document.getElementById("picture");
    var node2 = document.getElementById("inner-picture" + n);
    var node3 = document.getElementById("inner-picture" + m);
    node3.style.display = "none";
    switch (n) {
        case "1":
            node1.src = "mainpicture"+n+".jpg";
            node2.style.display = "block";
        case "2":
            node1.src = "mainpicture"+n+".jpg";
            node2.style.display = "block";
        case "3":
            node1.src = "mainpicture"+n+".jpg";
            node2.style.display = "block";
        case "4":
            node1.src = "mainpicture"+n+".jpg";
            node2.style.display = "block";
    }
}
function FindDisplayOn() {
    for (var i = 1; i < 5; ++i) {
        var node = document.getElementById("inner-picture" + i);
        if (node.style.display == "block") {
            return i;
        }
    }
}
function NewsPartOn(obj) {
    obj.style.color = "#1A5A9D";
    var newsnode = document.getElementById("news-part");
    var noticenode = document.getElementById("notice-part");
    if (obj.style.height=="1px") {
        noticenode.style.display = "none";
        newsnode.style.display = "block";
    }
    else if(obj.style.height=="2px") {
        noticenode.style.display = "block";
        newsnode.style.display = "none";
    }
}

function BottomOn(obj) {
    obj.style.color = "#1A5A9D";
    var picturenode = document.getElementById("picture-part");
    var mapnode = document.getElementById("map-part");
    var lifenode = document.getElementById("life-part");
    if (picturenode.style.display == "block") {
        picturenode.style.display = "none";
    }
    else if (mapnode.style.display == "block") {
        mapnode.style.display = "none";
    }
    else {
        lifenode.style.display = "none";
    }
    if (obj.style.height == "10px") {
        picturenode.style.display = "block";
    }
    else if (obj.style.height == "9px") {
        mapnode.style.display = "block";
    }
    else {
        lifenode.style.display = "block";
    }
}
