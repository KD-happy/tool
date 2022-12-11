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
function z(t) {
    e = "525202f9149e061d";
    var r = CryptoJS.enc.Utf8.parse(e)
      , n = CryptoJS.AES.decrypt(t, r, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(n)
}
function Read(t) {
    return new Promise((function(e) {
        var r = new Blob([t])
          , n = new FileReader;
        n.onload = function(t) {
            var r = t.target.result
              , n = r.substring(r.indexOf(",") + 1);
            e(n)
        }
        ,
        n.readAsDataURL(r)
    }
    ))
}
function playVideo(id) {
    $("body").css("overflow", "hidden")
    $('#player').show()
    $('#continue').hide()
    window.dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: `https://m.ailiomhapi.cn/api/video/new_opoo/${id}/111/random.m3u8`,
        },
        screenshot: true
    });
}
function jsonToB64(json) {
    return 'ekbbwD'+btoa(JSON.stringify(json))
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