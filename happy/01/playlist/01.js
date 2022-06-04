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
            time: 191,
            text: "嘿咻",
        }
    ],
    video: {
        url: "https://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/f7f296465285890810140537726/mn3w3SJDAzgA.mp4",
    },
});