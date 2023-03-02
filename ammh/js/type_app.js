const vm = new Vue({
    el: '#app',
    data: {
        videoList: [],
        page: 1,
        typeId: 0 ,
        class: 5,
        canLoad: true
    },
    methods: {
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
                    url: 'https://m.ailiomhapi.cn/api/video/new_class',
                    type: 'post',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify({
                        data: jsonToB64({
                            page: this.page,
                            class: _this.class,
                            type: 0
                        })
                    }),
                    success: function(data, textStatus) {
                        if (data.code != 200) {
                            Toast.fire({
                                icon: 'error',
                                text: data.msg
                            })
                            return
                        }
                        let json = JSON.parse(atob(data.data.substr(6)))
                        json.data.forEach(f => {
                            f.covers = 'https://ora.80000.pro/a/ns/assets31/img/mybg.107aa23f.png'
                            _this.videoList.push(f)
                            let _url = `https://orb.80000.pro/vd/${f.tid}/${f.cover.replace('.bnc', '.nmv')}`
                            ;((f) => {
                                var xhr = new XMLHttpRequest()
                                xhr.open('get', _url)
                                xhr.responseType = "arraybuffer"
                                xhr.onreadystatechange = function() {
                                    if (this.status == 200 && this.readyState == 4) {
                                        var e = this.response;
                                        Read(e).then((function(e) {
                                            var r = z(e);
                                            f.covers = "data:image/".concat("jpg", ";base64,").concat(r)
                                        }))
                                    }
                                }
                                xhr.send();
                            })(f);
                        })
                        if (json.data.length == 12) {
                            _this.page++
                            _this.canLoad = true
                        }
                    }
                })
            }
        },
        playVideo: function(id) {
            console.log(id)
            playVideo(id)
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
    }
})
var types = [
    {typeId: 0, title: "视频推荐"},
    {typeId: 1, title: "Cos"},
    {typeId: 2, title: "福利姬"},
    {typeId: 3, title: "AV"},
    {typeId: 4, title: "裸舞"},
    {typeId: 5, title: "里番动漫"},
    {typeId: 7, title: "3D动漫"},
    {typeId: 10, title: "ASMR"},
    {typeId: 12, title: "网黄"},
    {typeId: 13, title: "JVID"},
    {typeId: 14, title: "MMD"},
    {typeId: 15, title: "欧美"},
    {typeId: 16, title: "妹抖"},
    {typeId: 17, title: "少女"},
    {typeId: 18, title: "SWAG"},
    {typeId: 20, title: "JK"},
    {typeId: 21, title: "萝莉"},
    {typeId: 23, title: "伪娘"},
    {typeId: 27, title: "明星"},
    {typeId: 28, title: "精选"},
    {typeId: 29, title: "调教"},
    {typeId: 30, title: "未知。。"},
    {typeId: 31, title: "未知。。"},
    {typeId: 32, title: "未知。。"},
    {typeId: 33, title: "定制"},
]
var search = Object.fromEntries(new URLSearchParams(location.search))
vm.class = search.type
types.forEach(f => {
    if (search.type && f.typeId == search.type) {
        vm.class = search.type
        $('title').text(f.title)           
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