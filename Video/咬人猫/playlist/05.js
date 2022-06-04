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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_koxK87lu_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABx%E5%92%AC%E4%BA%BA%E5%96%B5%E3%80%91%E5%A7%90%E5%A6%B9%E6%B3%A2%E6%96%AF%E5%96%B5%E2%9D%A4%EF%B8%8F%E6%88%91%E7%9A%84%E5%A6%B9%E5%A6%B9%E6%89%8D%E6%B2%A1%E8%BF%99%E4%B9%88%E9%AB%98%E5%86%B7%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABx%E5%92%AC%E4%BA%BA%E5%96%B5%E3%80%91%E5%A7%90%E5%A6%B9%E6%B3%A2%E6%96%AF%E5%96%B5%E2%9D%A4%EF%B8%8F%E6%88%91%E7%9A%84%E5%A6%B9%E5%A6%B9%E6%89%8D%E6%B2%A1%E8%BF%99%E4%B9%88%E9%AB%98%E5%86%B7%EF%BC%81.mp4&e=1632273047&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:O2svWIF_g4DaRS3zZ0FFh-jMBug='
    },
});