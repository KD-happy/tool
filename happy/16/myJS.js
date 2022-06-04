function createMyElement(ID) { // 创建li a元素的选集框
    while (ID >= 1) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        if (ID >= 10) {
            a.setAttribute("id", `${ID}`);
            a.innerText = `第${ID}集`;
        } else {
            a.setAttribute("id", `0${ID}`);
            a.innerText = `第0${ID}集`;
        }
        li.append(a);
        document.querySelector("ul").appendChild(li);
        ID -= 1;
    }
}
function doCopy(content) { // 复制内容方法
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}