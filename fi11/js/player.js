var fi11_auth = $.cookie('fi11_auth')
console.log(fi11_auth)
if (!fi11_auth) {
    Toast.fire({
        icon: 'error',
        text: 'fi11_auth 为空！！请登录！！'
    })
    $("#login").show()
    $("#add_token").show()
} else {
    $("#login").hide()
    $("#add_token").hide()
}
var search = Object.fromEntries(new URLSearchParams(location.search))
if (search.videoId) {
    $.ajax({
        url: 'https://www.hxc-api.com/videos/getInfo',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            videoId: parseInt(search.videoId)
        }),
        success: function(data, textStatus) {
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.msg
                })
                return
            }
            $("title").text(`视频播放 - ${data.data.info.name}`)
        }
    })
    $.ajax({
        url: 'https://www.hxc-api.com/videos/getPreUrl',
        type: 'POST',
        headers: {
            auth: fi11_auth
        },
        data: {
            "videoId": search.videoId
        },
        success: function(data, textStatus) {
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.msg
                })
                if (data.code == 10) {
                    $.removeCookie('fi11_auth')
                }
                return
            }
            let url = new URL(data.data.url)
            url.searchParams.delete('start')
            url.searchParams.delete('end')
            window.dp = new DPlayer({
                container: document.getElementById('dplayer'),
                video: {
                    url: url.toString()
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