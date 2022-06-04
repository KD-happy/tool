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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_4WATwaPs_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABX%E9%9C%B2%E9%9C%B2%E3%80%91%E4%BB%8A%E5%A4%A9%E4%B8%8D%E4%B8%8A%E7%8F%AD%EF%BC%81%E8%B7%B3%E7%8C%9B%E7%94%B7%E7%89%88%EF%BC%81%E6%96%B0%20%E5%AE%9D%20%E5%B2%9B%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABX%E9%9C%B2%E9%9C%B2%E3%80%91%E4%BB%8A%E5%A4%A9%E4%B8%8D%E4%B8%8A%E7%8F%AD%EF%BC%81%E8%B7%B3%E7%8C%9B%E7%94%B7%E7%89%88%EF%BC%81%E6%96%B0%20%E5%AE%9D%20%E5%B2%9B%EF%BC%81.mp4&e=1632273047&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:RRPseGNZwL9D-tZNenLM80ScAas='
    },
});