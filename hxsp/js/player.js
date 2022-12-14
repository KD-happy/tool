var hxsp_token = $.cookie('hxsp_token')
if (!hxsp_token) {
    Toast.fire({
        icon: 'error',
        text: 'hxsp_token 为空！！请登录！！'
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
        url: 'https://api.jgf985.com/WebApp/WebVideo/VideoContentsInfo',
        type: 'GET',
        contentType: 'application/json',
        data: {
            id: search.videoId
        },
        success: function(data, textStatus) {
            if (data.code != 200200) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
                })
                return
            }
            $("title").text(`视频播放 - ${data.data.video_contents_info.name}`)
        }
    })
    playVideo(search.videoId)
} else {
    Toast.fire({
        icon: 'error',
        text: '没有 videoId'
    })
}