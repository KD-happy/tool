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
            time: 278,
            text: '嘿咻1',
        }, {
            time: 677,
            text: '嘿咻2',
        }
    ],
    video: {
        url: 'https://1400307455.vod2.myqcloud.com/ff1e61ffvodcq1400307455/eeb54b593701925919848393388/AHUADe2n7D8A.mp4'
    },
});