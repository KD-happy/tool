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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_QRpNYtcG_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E5%B0%8F%E9%B9%BF%E4%B9%B1%E6%92%9E%E2%9D%A4%EF%B8%8F%E8%8A%B1%E5%AB%81%E7%8C%AB%E5%A7%8A%E5%A6%B9%E7%AF%87o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E5%B0%8F%E9%B9%BF%E4%B9%B1%E6%92%9E%E2%9D%A4%EF%B8%8F%E8%8A%B1%E5%AB%81%E7%8C%AB%E5%A7%8A%E5%A6%B9%E7%AF%87o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4&e=1632273053&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:LSWu_kjOTGqjZGa4QKoSKlH3ntc='
    },
});