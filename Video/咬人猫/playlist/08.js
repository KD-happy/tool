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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_D9kTRib2_%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%204K%E7%94%BB%E8%B4%A8%EF%BC%81%E5%8B%BE%E6%8C%87%E8%B5%B7%E8%AA%93%EF%BC%81%E4%BD%A0%E7%9A%84%E6%89%8B%E6%9C%BA%E8%83%BD%E6%B5%81%E7%95%85%E6%92%AD%E6%94%BE%E5%90%97%EF%BC%9F.mp4?attname=%E3%80%90%E5%92%AC%E4%BA%BA%E7%8C%AB%E3%80%91%204K%E7%94%BB%E8%B4%A8%EF%BC%81%E5%8B%BE%E6%8C%87%E8%B5%B7%E8%AA%93%EF%BC%81%E4%BD%A0%E7%9A%84%E6%89%8B%E6%9C%BA%E8%83%BD%E6%B5%81%E7%95%85%E6%92%AD%E6%94%BE%E5%90%97%EF%BC%9F.mp4&e=1632273049&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:ZwS3S908u_zHeAtE5YSSArWsOdg='
    },
});