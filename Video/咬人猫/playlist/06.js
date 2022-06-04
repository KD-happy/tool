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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_dMqRM6Dk_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABx%E5%92%AC%E4%BA%BA%E5%96%B5%E3%80%91%E6%A1%83%E6%BA%90%E6%81%8B%E6%AD%8C%E2%9D%A4%EF%B8%8F%E6%88%91%E7%88%B1%E4%BD%A0%28%E2%81%8E%E2%81%8D%CC%B4%CC%9B%E1%B4%97%E2%81%8D%CC%B4%CC%9B%E2%81%8E%29%E6%88%91%E7%9A%84%E5%A7%90%E5%A7%90%E4%B8%8D%E5%8F%AF%E8%83%BD%E8%BF%99%E4%B9%88%E5%8F%AF%E7%88%B1%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABx%E5%92%AC%E4%BA%BA%E5%96%B5%E3%80%91%E6%A1%83%E6%BA%90%E6%81%8B%E6%AD%8C%E2%9D%A4%EF%B8%8F%E6%88%91%E7%88%B1%E4%BD%A0%28%E2%81%8E%E2%81%8D%CC%B4%CC%9B%E1%B4%97%E2%81%8D%CC%B4%CC%9B%E2%81%8E%29%E6%88%91%E7%9A%84%E5%A7%90%E5%A7%90%E4%B8%8D%E5%8F%AF%E8%83%BD%E8%BF%99%E4%B9%88%E5%8F%AF%E7%88%B1%EF%BC%81.mp4&e=1632273048&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:I3YGVtSC4MUqSskZxJvDMGLAPTM='
    },
});