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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_BD8I5VWa_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91PiNK%20CAT%E2%9D%A4o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91PiNK%20CAT%E2%9D%A4o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4&e=1632273050&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:djjs1Um6-IUuZ7pWpCILS_5HZyM='
    },
});