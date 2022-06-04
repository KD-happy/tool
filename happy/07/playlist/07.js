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
            time: 149,
            text: "嘿咻",
        }
    ],
    video: {
        // url: "http://1400293698.vod2.myqcloud.com/fd69ed6cvodcq1400293698/bea0a1a65285890814781425202/60m45PYwcAEA.png"
        url: 'https://1400307455.vod2.myqcloud.com/ff1e61ffvodcq1400307455/78b49bda5285890818780059837/5Wa10749HOkA.mp4'
    },
});