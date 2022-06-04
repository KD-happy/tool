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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_oPuiNZ5t_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E5%A5%B3%E4%BB%86%E8%A3%85%E6%81%8B%E7%88%B1%E5%BE%AA%E7%8E%AF%E2%9D%A4%EF%B8%8F%E5%8A%A0%E9%80%9F%E7%89%88%20&amp;%E2%80%9C%E8%85%BE%E6%A0%BC%E5%B0%94%E2%80%9D%E7%89%88%EF%BC%81.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E5%A5%B3%E4%BB%86%E8%A3%85%E6%81%8B%E7%88%B1%E5%BE%AA%E7%8E%AF%E2%9D%A4%EF%B8%8F%E5%8A%A0%E9%80%9F%E7%89%88%20&amp%3B%E2%80%9C%E8%85%BE%E6%A0%BC%E5%B0%94%E2%80%9D%E7%89%88%EF%BC%81.mp4&e=1632273052&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:GYv-iLVtyBi7aDZp2oDq6Lshv-g='
    },
});