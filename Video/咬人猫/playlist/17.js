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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_2HMs8fMJ_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E8%8A%92%E7%A7%8D%20%E2%9D%A4%EF%B8%8F%20%E4%B8%80%E6%83%B3%E5%88%B0%E4%BD%A0%E6%88%91%E5%B0%B1%E2%80%A6%E2%80%A6.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E8%8A%92%E7%A7%8D%20%E2%9D%A4%EF%B8%8F%20%E4%B8%80%E6%83%B3%E5%88%B0%E4%BD%A0%E6%88%91%E5%B0%B1%E2%80%A6%E2%80%A6.mp4&e=1632273052&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:alGDtaHqmc6x2chYWq1Akr9RO54='
    },
});