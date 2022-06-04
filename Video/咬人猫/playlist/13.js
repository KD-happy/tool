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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_rAj2gK1s_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91Toxic%E2%9D%A4%EF%B8%8F%E4%BD%A0%E7%9A%84%E4%B8%93%E5%B1%9E%E5%B0%8F%E6%81%B6%E9%AD%94%20o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84P2%E7%AB%96%E5%B1%8F%E7%89%88.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91Toxic%E2%9D%A4%EF%B8%8F%E4%BD%A0%E7%9A%84%E4%B8%93%E5%B1%9E%E5%B0%8F%E6%81%B6%E9%AD%94%20o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84P2%E7%AB%96%E5%B1%8F%E7%89%88.mp4&e=1632273050&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:1Tc9X91QvXPIvPbsyox2_VC8WKc='
    },
});