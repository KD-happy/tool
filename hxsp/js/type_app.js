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
                var data = {
                    page: _this.page,
                    size: _this.length,
                    types: 0,
                    kind_id: _this.typeId,
                    pay_type: 2
                }
                if (_this.typeId == 1) {
                    delete data['kind_id']
                    data['new_hot'] = 'zuire'
                } else if (_this.typeId == 2) {
                    delete data['kind_id']
                    data['new_time'] = 'zuixin'
                } else if (_this.typeId == 3) {
                    delete data['kind_id']
                    data['pay_type'] = 1
                }
                $.ajax({
                    url: 'https://api.jgf985.com/WebApp/VideoContentsList',
                    type: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8'
                    },
                    data: data,
                    success: function(data, textStatus) {
                        if (data.code != 200200) {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                            return
                        }
                        data.data.list.forEach(f => {
                            f.coverImgUrl = ""
                            _this.videoList.push(f)
                            $.ajax({
                                url: `${f.ftp_img_url}/${f.preview_img}`,
                                success: function(data, textStatus) {
                                    f.coverImgUrl = data.replace(";base64,yinghua", ";base64,")
                                }
                            })
                        })
                        if (data.data.list.length == _this.length) {
                            Toast.fire({
                                icon: 'success',
                                text: `${_this.page*_this.length}/${data.data.total}`
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
                    },
                    error: function(data) {
                        data = JSON.parse(data.responseText)
                        Toast.fire({
                            icon: 'error',
                            text: data.message
                        })
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
    {typeId: 1, title: "最热"},
    {typeId: 2, title: "最新"},
    {typeId: 3, title: "付费"},
    {typeId: 13, title: "国产"},
    {typeId: 14, title: "主播"},
    {typeId: 15, title: "日韩"},
    {typeId: 16, title: "欧美"},
    {typeId: 17, title: "动漫"},
]
var search = Object.fromEntries(new URLSearchParams(location.search))
vm.typeId = 17
$('title').text("动漫")
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