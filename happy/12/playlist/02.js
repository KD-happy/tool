var dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    preload: 'none',
    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    contextmenu: [{
            text: '复制链接',
            click: (video) => {
                Url = document.querySelector('.dplayer-video').getAttribute('src');
                doCopy(Url);
            },
        },
    ],
    highlight: [{
            time: 489,
            text: '嘿咻1',
        }, {
            time: 1060,
            text: '嘿咻2',
        }
    ],
    video: {
        url: 'https://sf1-ttcdn-tos.pstatp.com/obj/tos-cn-v-0004/1adf10718b094ef48943339d48813ec9?partNumber'
    },
});