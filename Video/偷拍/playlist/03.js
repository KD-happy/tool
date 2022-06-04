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
        url: 'https://xmyp54-my.sharepoint.cn/personal/admin_xmyp54_partner_onmschina_cn/_layouts/15/download.aspx?UniqueId=67a82f66-7bac-463e-b633-02ca6d0831de&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAveG15cDU0LW15LnNoYXJlcG9pbnQuY25AMjZhNzA3ZDEtOGIzNS00NDgzLTg4MjItMzExMTIxMDRjNDIwIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYzMjE4NzQ0MiIsImV4cCI6IjE2MzIxOTEwNDIiLCJlbmRwb2ludHVybCI6Ijg1eVFzNjVwUWliYVh3MjV0U2JNZUVvZ1FKN0VFZENiZGc3N3pBN01vMlk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik9XVmtaRFk0TjJNdFptRmlZaTAwT0daa0xUbGpabUV0WVdKa09UVTJZV014T0RJMSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJaVGhqTWpJM05EVXRZamxtTkMwMFlUUTNMV0U0WWpNdE5qSTFNak14T0daallqazEiLCJhcHBfZGlzcGxheW5hbWUiOiJ4bXlwNTQiLCJhcHBpZCI6IjA3NmZkMjI0LThkZGEtNDczMC05Y2IzLTc0Zjk4YjMyNWYwZiIsInRpZCI6IjI2YTcwN2QxLThiMzUtNDQ4My04ODIyLTMxMTEyMTA0YzQyMCIsInVwbiI6ImFkbWluQHhteXA1NC5wYXJ0bmVyLm9ubXNjaGluYS5jbiIsInB1aWQiOiIxMDAzMzIzMEM1QzI1OUFEIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzMyMzBjNWMyNTlhZEBsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLndyaXRlIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.b2RTMTUvcVJ6VVpJLzh1V1RrR2JVT1QvMWlZbE1BenVSMllwNDMvVnpKaz0&ApiVersion=2.0'
    },
});