Toast = Swal.mixin({
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
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
            user_pass: password,
            user_login: userName
        }),
        accepts: 'application/json',
        success: function(data) {
            console.log(data)
            if (data.code != 0) {
                Toast.fire({
                    icon: 'error',
                    text: data.message
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

function decryptFn(data) {
    var aesKey = "46cc793c53dc451b"
    var aes = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(aesKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return aes.toString(CryptoJS.enc.Utf8)
}

function getPreUrl(videoId) {
    $.ajax({
        url: 'https://www.hxc-api.com/videos/getPreUrl',
        headers: {
            auth: 'ZTNlOWNjYjA0NDhkYjk4YjUxMTEzOGE4MGQyZjZiZjZ8Mjg3NDc1OTgx'
        },
        contentType: 'application/json',
        data: JSON.stringify({
            videoId: videoId
        }),
        success: function(data) {
            let m3u8Url = data.url
            let splited = m3u8Url.split("?")
            let m3u8UrlParams = splited[1]
            let urlSearchParams = new URLSearchParams(m3u8UrlParams)
            urlSearchParams.delete("start")
            urlSearchParams.delete("end")
            let newM3U8Url = splited[0] + "?" + urlSearchParams.toString()
            return newM3U8Url
        }
    })
}