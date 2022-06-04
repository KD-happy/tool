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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_4VVRyw59_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E5%9C%A8%E5%A4%96%E5%A4%AA%E7%A9%BA%E8%B9%A6%E8%BF%AA%EF%BC%81%E8%92%82%E6%B3%95%E5%96%B5%E2%9D%A4%EF%B8%8F%E7%96%91%E5%BF%83%E6%9A%97%E9%AC%BC%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E5%9C%A8%E5%A4%96%E5%A4%AA%E7%A9%BA%E8%B9%A6%E8%BF%AA%EF%BC%81%E8%92%82%E6%B3%95%E5%96%B5%E2%9D%A4%EF%B8%8F%E7%96%91%E5%BF%83%E6%9A%97%E9%AC%BC%EF%BC%81.mp4&e=1632273046&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:bZ8Yomxc0yEcZeqwENsnti-fn9w='
    },
});