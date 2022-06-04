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
            time: 80,
            text: "嘿咻1",
        }, {
            time: 252,
            text: "嘿咻2",
        },
    ],
    video: {
        url: "https://1400307455.vod2.myqcloud.com/ff1e61ffvodcq1400307455/2b989c163701925918788555176/D8BT81DAsLcA.mp4"
    },
});