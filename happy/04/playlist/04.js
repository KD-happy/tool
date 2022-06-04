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
            time: 190,
            text: "嘿咻",
        }
    ],
    video: {
        // url: "http://1400293698.vod2.myqcloud.com/fd69ed6cvodcq1400293698/d8d34db15285890815194357138/nlId9hgaS9IA.png"
        url: 'https://1400307455.vod2.myqcloud.com/ff1e61ffvodcq1400307455/8b25d0915285890818780826061/tCsrZJu664kA.mp4'
    },
});