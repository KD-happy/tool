function doMain(no, title, time, remarks, score) {
    var li = document.createElement("li");
    li.setAttribute("class", "col-md-2 col-sm-3 col-xs-4");

    var a1 = document.createElement("a");
    a1.setAttribute("class", "video-pic loading");
    a1.setAttribute("data-original", `./${no}/image.jpg`);
    a1.setAttribute("href", `./${no}/`);
    a1.setAttribute("title", title);
    a1.setAttribute("style", `background-image: url('./${no}/image.jpg');`);

    var a2 = document.createElement("a");
    a2.setAttribute("href", `./${no}/index.html`);
    a2.setAttribute("title", time);
    a2.innerText = title;

    var div = document.createElement("div");
    div.setAttribute("class", "title");

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "text-overflow");

    var span1 = document.createElement("span");
    span1.setAttribute("class", "player");
    var span2 = document.createElement("span");
    span2.setAttribute("class", "score");
    span2.innerText = score;
    var span3 = document.createElement("span");
    span3.setAttribute("class", "note text-bg-r");
    span3.innerText = remarks;

    h5.append(a2);
    div.append(h5);
    a1.append(span1);
    a1.append(span2);
    a1.append(span3);
    li.append(a1);
    li.append(div);

    document.querySelector("ul").append(li);
}