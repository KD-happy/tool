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
function aesDecrypt(data, aesKey = '46cc793c53dc451b') { //解密
    if (data.length < 1) {
        return '';
    }
    let key = CryptoJS.enc.Utf8.parse(aesKey);
    let decrypt = CryptoJS.AES.decrypt(data, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr;
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
        url: 'https://www.kmqsaq.com/user/login',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
            clientType: 1,
            password: password,
            userName: userName
        }),
        accepts: 'application/json',
        success: function(data, textStatus, xhr) {
            if (data.code != 1) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
                })
            } else {
                let login_info = JSON.parse(aesDecrypt(data.data))
                $.cookie('re05_token', login_info.token, {expires: 1})
                Toast.fire({
                    icon: 'success',
                    text: '登录成功'
                })
                $("#login").hide()
                $("#add_token").hide()
                re05_token = login_info.token
            }
        }
    })
}
function get_album_title(albumId) {
    $.ajax({
        url: 'https://www.kmqsaq.com/album/getAlbumInfo',
        type: 'post',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify({
            albumId: albumId,
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
            $("title").text(json.info.name)
        }
    })
}
function get_actor_title(actorId) {
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
            $("title").text(json.info.name)
        }
    })
}
function playVideo(id) {
    $.ajax({
        url: 'https://kmqsaq.com/video/getUrl',
        type: 'POST',
        headers: {
            token: re05_token
        },
        data: {
            "clientType":1,
            "videoId": id
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
            window.dp = new DPlayer({
                container: document.getElementById('dplayer'),
                video: {
                    url: json.url,
                },
                screenshot: true
            });
        }
    })
}
function add_token() {
    let tmp_token = prompt("请输入token：")
    re05_token = decodeURIComponent(tmp_token)
    if (tmp_token) {
        Toast.fire({
            icon: 'success',
            text: '添加成功'
        })
        $.cookie('re05_token', decodeURIComponent(tmp_token), {expires: 1})
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
        let password = prompt("请输入密码：", "wlhs@163.com")
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
    // console.log(event.which)
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
var re05_token = $.cookie('re05_token')
if (!re05_token) {
    Toast.fire({
        icon: 'error',
        text: 're05_token 为空！！请登录！！'
    })
    $("#login").show()
    $("#add_token").show()
} else {
    $("#login").hide()
    $("#add_token").hide()
}