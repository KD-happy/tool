var re05_token = $.cookie('re05_token')
if (!re05_token) {
    Toast.fire({
        icon: 'error',
        text: 're05_token 为空！！请登录！！'
    })
    $("#login").show()
    $("#add_token").show()
} else {
    console.log(re05_token)
    $("#login").hide()
    $("#add_token").hide()
}
var search = Object.fromEntries(new URLSearchParams(location.search))
if (search.videoId) {
    $.ajax({
        url: 'https://www.kmqsaq.com/video/getInfo',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            clientType: 1,
            videoId: search.videoId
        }),
        success: function(data, textStatus) {
            if (data.code != 1) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
                })
                return
            }
            var json = JSON.parse(aesDecrypt(data.data))
            $("title").text(`视频播放 - ${json.info.name}`)
        }
    })
    $.ajax({
        url: 'https://kmqsaq.com/video/getUrl',
        type: 'POST',
        contentType: 'application/json',
        headers: {
            token: re05_token
        },
        data: JSON.stringify({
            "clientType":1,
            "videoId": search.videoId
        }),
        success: function(data, textStatus) {
            if (data.code != 1) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
                })
                if (data.code == 10) {
                    $.removeCookie('re05_token')
                }
                return
            }
            var json = JSON.parse(aesDecrypt(data.data))
            console.log(json)
            window.dp = new DPlayer({
                container: document.getElementById('dplayer'),
                video: {
                    url: json.url,
                },
                screenshot: true
            });
        }
    })
} else {
    Toast.fire({
        icon: 'error',
        text: '没有 videoId'
    })
}