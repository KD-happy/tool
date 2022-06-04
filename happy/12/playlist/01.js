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
            time: 405,
            text: '嘿咻1',
        }, {
            time: 939,
            text: '嘿咻2',
        }
    ],
    video: {
        url: 'https://sf1-ttcdn-tos.pstatp.com/obj/tos-cn-v-0004/f6977f2baa9b4aecb93c722d01664e3b?partNumber'
    },
});