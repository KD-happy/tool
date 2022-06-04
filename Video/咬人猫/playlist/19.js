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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_EmkpNQ9v_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E6%B2%99%E6%BB%A9%E4%B8%8A%E7%9A%84%E6%B0%B4%E6%89%8B%E6%9C%8D%E5%96%B5%21%20%E2%9D%A4%EF%B8%8F%20booo%21%E3%80%90%E7%AC%AC100%E4%BD%9C%E3%80%91.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E6%B2%99%E6%BB%A9%E4%B8%8A%E7%9A%84%E6%B0%B4%E6%89%8B%E6%9C%8D%E5%96%B5%21%20%E2%9D%A4%EF%B8%8F%20booo%21%E3%80%90%E7%AC%AC100%E4%BD%9C%E3%80%91.mp4&e=1632273053&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:t82V3auT-mSa4XMuE2XBbcbjzHk='
    },
});