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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_wp1MrZV0_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E7%A5%9E%E8%B0%95%E6%B3%95%E5%88%99%E2%9D%A4%EF%B8%8F%E4%B8%8E%E4%BD%A0%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A%E7%9A%84%E7%9B%B8%E9%81%87%EF%BC%81%E5%8E%9F%E5%88%9B%E8%88%9E%E8%B9%88%20o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E7%A5%9E%E8%B0%95%E6%B3%95%E5%88%99%E2%9D%A4%EF%B8%8F%E4%B8%8E%E4%BD%A0%E5%91%BD%E4%B8%AD%E6%B3%A8%E5%AE%9A%E7%9A%84%E7%9B%B8%E9%81%87%EF%BC%81%E5%8E%9F%E5%88%9B%E8%88%9E%E8%B9%88%20o%28_%E2%89%A7%E2%96%BD%E2%89%A6%29%E3%83%84.mp4&e=1632273053&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:2b-upVSm_N7GSJBfqV69yUw6f4U='
    },
});