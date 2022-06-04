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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_aQzmrNgP_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91Calc.%E2%9D%A4%E6%83%B3%E5%92%8C%E4%BD%A0%E5%8E%BB%E7%9C%8B%E6%9C%80%E7%BE%8E%E7%9A%84%E9%A3%8E%E6%99%AFo%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91Calc.%E2%9D%A4%E6%83%B3%E5%92%8C%E4%BD%A0%E5%8E%BB%E7%9C%8B%E6%9C%80%E7%BE%8E%E7%9A%84%E9%A3%8E%E6%99%AFo%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4&e=1632273049&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:596MU5SsqkIOItSBl3lo_Zzrgww=      '
    },
});