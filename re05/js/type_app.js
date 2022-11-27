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
            login()
        },
        add_token: function() {
            add_token()
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
                            Toast.fire({
                                icon: 'success',
                                text: `${_this.page*_this.length}/${json.recordsTotal}`
                            })
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

types.forEach(f => {
    if (search.type && f.typeId == search.type) {
        vm.typeId = search.type
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