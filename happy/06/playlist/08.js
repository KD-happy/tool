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
            time: 181,
            text: "嘿咻",
        }
    ],
    video: {
        url: "https://qqgame.gzc.svp.tencent-cloud.com/gzc_1000035_0b2ewyc7eaaflaaopzapjzqzbnwd6k3al4sa.f0.mp4"
    },
});