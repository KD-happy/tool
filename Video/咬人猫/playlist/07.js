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
            time: 110,
            text: '嘿咻',
        }
    ],
    video: {
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_xvbG0lgG_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E9%82%AE%E8%BD%AE%E8%B9%A6%E8%BF%AA%E5%88%9D%E4%BD%93%E9%AA%8C%EF%BC%81%E2%9D%A4%EF%B8%8F%20FANCY%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E9%82%AE%E8%BD%AE%E8%B9%A6%E8%BF%AA%E5%88%9D%E4%BD%93%E9%AA%8C%EF%BC%81%E2%9D%A4%EF%B8%8F%20FANCY%EF%BC%81.mp4&e=1632273048&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:ltVDmTctmoHVb6OMDnTJWK8-cZM='
    },
});