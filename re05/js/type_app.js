const vm = new Vue({
    el: '#app',
    data: {
        videoList: [],
        page: 1,
        typeId: 0 ,
        length: 30,
        canLoad: true
    },
    methods: {
        login: function() {
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
        },
        add_token: function() {
            let tmp_token = prompt("请输入token：")
            re05_token = tmp_token
            if (tmp_token) {
                Toast.fire({
                    icon: 'success',
                    text: '添加成功'
                })
                $.cookie('re05_token', tmp_token, {expires: 1})
                $("#login").hide()
                $("#add_token").hide()
            } else {
                Toast.fire({
                    icon: 'error',
                    text: '取消添加'
                })
            }
        },
        continue_play: function() {
            $("body").css("overflow", "hidden")
            $("#player").show()
            $("#continue").hide()
        },
        home: function() {
            location.href = './'
        },
        getList: function() {
            if (this.canLoad) {
                var _this = this
                this.canLoad = false
                $.ajax({
                    url: 'https://www.kmqsaq.com/video/getList',
                    type: 'post',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify({
                        clientType: 1,
                        page: this.page,
                        length: this.length,
                        typeId: this.typeId
                    }),
                    success: function(data, textStatus) {
                        if (data.code != 1) {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                            return
                        }
                        let json = JSON.parse(aesDecrypt(data.data))
                        json.list.forEach(f => {
                            _this.videoList.push(f)
                            // 加载图片
                            $.ajax({
                                url: f.coverImgUrl,
                                success: function(data, textStatus) {
                                    f.coverImgUrl = `data:image/jpg;base64,${data.replace(/^kuaimaoshipin/, "")}`
                                }
                            })
                        })
                        if (json.list.length == _this.length) {
                            _this.canLoad = true
                            _this.page++
                        } else {
                            $("#add").hide()
                            Toast.fire({
                                icon: 'success',
                                text: `已全部加载`
                            })
                        }
                    }
                })
            }
        },
        playVideo: function(id) {
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
        },
        playNew: function(id) {
            window.open(`./player.html?videoId=${id}`)
        },
        close: function() {
            $("body").css("overflow", "")
            $("#player").hide()
            $("#continue").show()
            dp.pause()
        }
    },
    filters: {
        getVideoTimeLength: function(time) {
            return getVideoTimeLength(time)
        }
    }
})
var types = [
    {typeId: 2, title: "国产"},
    {typeId: 3, title: "主播"},
    {typeId: 4, title: "日韩"},
    {typeId: 5, title: "欧美"},
    {typeId: 37, title: "动漫"},
]
var search = Object.fromEntries(new URLSearchParams(location.search))
var typeId = 0, title = "最新更新"
types.forEach(f => {
    if (search.type && f.typeId == search.type) {
        vm.typeId = search.type
        $('title').text(title)           
    }
})

vm.getList()

window.addEventListener('scroll', function(e) {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    if (scrollHeight <= scrollTop + clientHeight + 300 && vm.canLoad) {
        vm.getList()
    }
})