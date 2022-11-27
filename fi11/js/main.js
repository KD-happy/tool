const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
function decryptFn(data) {
    var aesKey = "46cc793c53dc451b"
    var aes = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(aesKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return aes.toString(CryptoJS.enc.Utf8)
}
function getVideoTimeLength(s) {
    let hours = null;
    let minutes = null;
    let second = 0;
    /*处理小时，大于等于1赋值(取整)，否则为0*/
    (s/3600)>=1?hours = Math.floor(s/3600):hours=0;
    /*处理分钟，如果hours有值，那么直接用总分钟数-hours*60，就是需要的值*/
    if(hours===0){
        minutes=Math.floor(s/60);
    }
    else if(hours>0){
        minutes=Math.floor(s/60-hours*60);
    }
    /*处理秒前的0数值*/
    if(minutes<10){
        minutes='0'+minutes;
    }
    /*处理秒，总秒数-之前已经显示的秒数，就是剩下的秒数*/
    if(s<60){
        /*如果秒数小于60，那么直接秒数直接为当前参数的秒数*/
        second=s;
    }
    else if(s===60){
        s=0;
    }
    else if(s>60){
        /*如果秒数大于60，那么减去之前小时和分钟占用的秒数，就是剩下的秒数*/
        second=s-(hours*60*60+minutes*60);
    }
    /*处理秒前的0数值*/
    if(second<10){
        second='0'+second;
    }
    /*返回显示*/
    if(hours===0){
        return `${minutes}:${second}`;
    }
    else{
        return `${hours}:${minutes}:${second}`;
    }
}
function user_login(userName, password) {
    $.ajax({
        url: 'https://www.hxc-api.com/login/userLogin',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
            user_pass: password,
            user_login: userName
        }),
        accepts: 'application/json',
        success: function(data, textStatus, xhr) {
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.msg
                })
            } else {
                $.cookie('fi11_auth', data.data.token, {expires: 1})
                Toast.fire({
                    icon: 'success',
                    text: '登录成功'
                })
                $("#login").hide()
                $("#add_token").hide()
                fi11_auth = data.data.token
            }
        }
    })
}
function get_album_title(albumId) {
    $.ajax({
        url: 'https://www.hxc-api.com/album/getAlbumInfo',
        type: 'post',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify({
            albumId: parseInt(albumId)
        }),
        success: function(data, textStatus) {
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.msg
                })
                return
            }
            $("title").text(data.data.info.name)
        }
    })
}
function get_actor_title(actorId) {
    $.ajax({
        url: 'https://www.hxc-api.com/actor/getActorInfo',
        type: 'post',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify({
            actorId: parseInt(actorId)
        }),
        success: function(data, textStatus) {
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.msg
                })
                return
            }
            $("title").text(data.data.info.name)
        }
    })
}
function playVideo(id) {
    $.ajax({
        url: 'https://www.hxc-api.com/videos/getPreUrl',
        type: 'POST',
        headers: {
            auth: fi11_auth
        },
        data: {
            "videoId": id
        },
        success: function(data, textStatus) {
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.msg
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
}
function add_token() {
    let tmp_token = prompt("请输入token：")
    fi11_auth = tmp_token
    if (tmp_token) {
        Toast.fire({
            icon: 'success',
            text: '添加成功'
        })
        $.cookie('fi11_auth', tmp_token, {expires: 1})
        $("#login").hide()
        $("#add_token").hide()
    } else {
        Toast.fire({
            icon: 'error',
            text: '取消添加'
        })
    }
}
function login() {
    let userName = prompt("请输入邮箱：", "wlhs@163.com")
    if (userName) {
        let password = prompt("请输入密码：", "wlhs163com")
        if (password) {
            user_login(userName, password)
        } else {
            Toast.fire({
                icon: 'error',
                text: '取消登录'
            })
        }
    } else {
        Toast.fire({
            icon: 'error',
            text: '取消登录'
        })
    }
}

$(window).keydown(function(event) {
    let _key = !event.altKey && !event.shiftKey && !event.ctrlKey
    if (event.which == 27) {
        if ($("#player").is(':visible')) {
            $("#close").click()
        }
    } else if (event.key == 'w' && _key && $("#player").is(':visible')) {
        let full = document.querySelector(".dplayer-full-in-icon")
        full && full.click()
    } else if (event.key == 'f' && _key && $("#player").is(':visible')) {
        let full = document.querySelector(".dplayer-full-icon")
        full && full.click()
    }
})
$('#player').hide()
$('#continue').hide()
var fi11_auth = $.cookie('fi11_auth')
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