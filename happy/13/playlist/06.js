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
    video: {
        url: 'https://1400307455.vod2.myqcloud.com/ff1e61ffvodcq1400307455/38956a103701925919289663470/lD2fd6DfzSQA.mp4'
    },
});