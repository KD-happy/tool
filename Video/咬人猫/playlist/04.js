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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_tH0pC7qn_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABX%E5%92%AC%E4%BA%BA%E5%96%B5%E3%80%91Lamb.%E6%88%91%E7%9A%84%E5%A7%90%E5%A7%90%E7%BB%88%E4%BA%8E%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%ABX%E5%92%AC%E4%BA%BA%E5%96%B5%E3%80%91Lamb.%E6%88%91%E7%9A%84%E5%A7%90%E5%A7%90%E7%BB%88%E4%BA%8E%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%EF%BC%81.mp4&e=1632273047&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:Vu_n-88bZpp3J9CE5hK7d8cOKIs='
    },
});