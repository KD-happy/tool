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
            time: 126,
            text: "嘿咻1",
        }, {
            time: 230,
            text: "嘿咻2",
        }
    ],
    video: {
        url: 'https://alime-customer-upload-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/customer-upload/1617894778252_w5y5wxnzbjl7.mp4'
    },
});