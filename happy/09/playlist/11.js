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
            time: 115,
            text: "嘿咻",
        }
    ],
    video: {
        url: 'https://1400307455.vod2.myqcloud.com/ff1e61ffvodcq1400307455/f94a74ed3701925919349506546/fF5leIP7yqcA.mp4'
    },
});