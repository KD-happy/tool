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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_vdEAKiD5_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E4%BB%8A%E5%A4%A9%E4%B8%8D%E5%81%9A%E9%A5%AD%EF%BC%81%E5%9C%A8%E5%8E%A8%E6%88%BF%E8%B7%B3%EF%BC%81Thumbs%20Up%EF%BC%81_%E9%AB%98%E6%B8%85%201080P60_%E5%8E%A8%E5%A8%98%E5%96%B5.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%E4%BB%8A%E5%A4%A9%E4%B8%8D%E5%81%9A%E9%A5%AD%EF%BC%81%E5%9C%A8%E5%8E%A8%E6%88%BF%E8%B7%B3%EF%BC%81Thumbs%20Up%EF%BC%81_%E9%AB%98%E6%B8%85%201080P60_%E5%8E%A8%E5%A8%98%E5%96%B5.mp4&e=1632273051&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:sxmoXvScDX9q9ZwLC-lfBThDXBs='
    },
});