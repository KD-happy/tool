function add_item(page, length=30) {
    $.ajax({
        url: 'https://www.hxc-api.com/videos/getList',
        type: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify({
            page: page,
            length: length,
            typeId: parseInt(typeId),
            type: 1,
            orderText: [{
                dir: "desc",
                column: "addTimeStamp"
            }]
        }),
        success: function(data) {
            console.log(data)
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
                })
                return
            }
            if (data.data.list.length < length) {
                $("#add").hide()
                Toast.fire({
                    icon: 'success',
                    text: `已全部加载`
                })
            }
            data.data.list.forEach(f => {
                let demo = $(`<div class="videoListStyle">
                    <div class="imgArea">
                        <div class="play">
                            <img>
                        </div>
                    </div>
                    <div class="addTime">00</div>
                    <div class="time">00</div>
                    <p class="title"></p>
                    <ul class="bottomSignBox">
                        <li class="seeCount"></li>
                        <li class="point"></li>
                    </ul>
                    <button id="play_blank">新窗口</button>
                </div>`);
                demo.find(".play").click(function() {
                    $.ajax({
                        url: 'https://www.hxc-api.com/videos/getPreUrl',
                        type: 'POST',
                        headers: {
                            auth: fi11_auth
                        },
                        contentType: 'application/json',
                        data: JSON.stringify({
                            videoId: parseInt($(this).attr("videoId"))
                        }),
                        success: function(data) {
                            if (data.code != 0) {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                                if (data.code == 10) {
                                    $.removeCookie('fi11_auth')
                                    $("#login").show()
                                    $("#add_token").show()
                                }
                                return
                            }
                            $("body").css("overflow", "hidden")
                            $('#player').show()
                            $('#continue').hide()
                            let m3u8Url = data.data.url
                            let splited = m3u8Url.split("?")
                            let m3u8UrlParams = splited[1]
                            let urlSearchParams = new URLSearchParams(m3u8UrlParams)
                            urlSearchParams.delete("start")
                            urlSearchParams.delete("end")
                            let newM3U8Url = splited[0] + "?" + urlSearchParams.toString()
                            window.dp = new DPlayer({
                                container: document.getElementById('dplayer'),
                                video: {
                                    url: newM3U8Url
                                },
                                screenshot: true
                            });
                        }
                    })
                })
                demo.find(".play").attr({videoId: f.id})
                demo.find("img").attr({res: f.coverImgUrl, title: f.name})
                demo.find(".title").text(f.name)
                demo.find(".addTime").text(f.addTime)
                demo.find(".time").text(getVideoTimeLength(f.length))
                demo.find(".seeCount").text("播放次数: " + f.seeCount)
                demo.find(".point").text("钻石数: " + f.point)
                demo.find("#play_blank").click(function() {
                    window.open(`./player.html?videoId=${f.id}`, 'blank')
                })
                $(".videoListBox").append(demo)
                $.ajax({
                    url: f.coverImgUrl,
                    success: function(data, textStatus) {
                        $(demo).find('.imgArea img').removeAttr('res')
                        $(demo).find('.imgArea img').attr('src', decryptFn(data))
                    }
                })
            })
        }
    })
}