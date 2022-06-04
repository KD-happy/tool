var dp = new DPlayer({
    container: document.getElementById("dplayer"),
    screenshot: true,
    preload: "none",
    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    contextmenu: [{
            text: "复制链接",
            click: (video) => {
                Url = document.querySelector('.dplayer-video').getAttribute('src');
                doCopy(Url);
            },
        },
    ],
    highlight: [{
            time: 228,
            text: "嘿咻",
        }
    ],
    video: {
        url: "http://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/67ef71095285890807720132665/RGoBh0RagCsA.mp4",
    },
});