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
            time: 132,
            text: "嘿咻",
        }
    ],
    video: {
        url: 'https://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/6cdc8f705285890810138285738/tdYHwfK8Z0MA.mp4',
    },
});