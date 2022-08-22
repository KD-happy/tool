function add_item(page, length=20) {
    $.ajax({
        url: 'https://www.kmqsaq.com/actor/getActorVideoList',
        type: 'post',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify({
            clientType: 1,
            page: page,
            length: length,
            actorId: actorId
        }),
        success: function(data, textStatus) {
            if (data.code != 1) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
                })
                return
            }
            // console.log(data)
            var json = JSON.parse(aesDecrypt(data.data))
            console.log(json)
            if (json.list.length < length) {
                $("#add").hide()
                Toast.fire({
                    icon: 'success',
                    text: `已全部加载`
                })
            }
            json.list.forEach(f => {
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
                        url: 'https://kmqsaq.com/video/getUrl',
                        type: 'POST',
                        headers: {
                            token: re05_token
                        },
                        data: {
                            "clientType":1,
                            "videoId": $(this).attr("videoId")
                        },
                        success: function(data, textStatus) {
                            if (data.code != 1) {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                                if (data.code == 10) {
                                    $.removeCookie('re05_token')
                                    $("#login").show()
                                    $("#add_token").show()
                                }
                                return
                            }
                            $("body").css("overflow", "hidden")
                            $('#player').show()
                            $('#continue').hide()
                            var json = JSON.parse(aesDecrypt(data.data))
                            console.log(json)
                            // $("#play_m3u8").attr('src', `./play_m3u8.html#${json.url}`)
                            window.dp = new DPlayer({
                                container: document.getElementById('dplayer'),
                                video: {
                                    url: json.url,
                                },
                                screenshot: true
                            });
                        }
                    })
                    // console.log("点击了")
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
                        // console.log(f.coverImgUrl)
                        $(demo).find('.imgArea img').removeAttr('res')
                        $(demo).find('.imgArea img').attr('src', `data:image/jpg;base64,${data.replace(/^kuaimaoshipin/, "")}`)
                    }
                })
            })
        }
    })
}

function get_title(actorId) {
    $.ajax({
        url: 'https://www.kmqsaq.com/actor/getActorInfo',
        type: 'post',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify({
            actorId: actorId,
            clientType: 1
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
            console.log(json)
            $("title").text(json.info.name)
        }
    })
}