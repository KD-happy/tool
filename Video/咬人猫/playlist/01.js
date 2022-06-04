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
        url: 'http://cdn-qiniu.test.upcdn.net/6195/20200705/6195_4OXsxhs0_%E3%80%90%E5%AF%84%E6%98%8E%E6%9C%88%E3%80%91%E5%92%AC%E4%BA%BA%E7%8C%AB_%E6%9C%89%E5%92%A9%E9%85%B1_%E8%B5%A4%E4%B9%9D%E7%8E%96%E2%9D%A4%EF%B8%8F155%E5%B0%8F%E5%88%86%E9%98%9F%21%E5%90%88%E4%BD%93%E5%95%A6%21.mp4?attname=%E3%80%90%E5%AF%84%E6%98%8E%E6%9C%88%E3%80%91%E5%92%AC%E4%BA%BA%E7%8C%AB_%E6%9C%89%E5%92%A9%E9%85%B1_%E8%B5%A4%E4%B9%9D%E7%8E%96%E2%9D%A4%EF%B8%8F155%E5%B0%8F%E5%88%86%E9%98%9F%21%E5%90%88%E4%BD%93%E5%95%A6%21.mp4&e=1632273046&token=qwUSUX3JOkW8yB3USN9S8dHDz6Doamrb49bDyYDl:_Q7okNKnooY_A8wZheiSuETdmzY='
    },
});