const vm = new Vue({
    el: '#app',
    data: {
        videoList: [],
        page: 1,
        typeId: 0 ,
        length: 30,
        canLoad: true,
        searchText: ''
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
                    url: 'https://www.hxc-api.com/videos/getList',
                    type: 'post',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify({
                        page: this.page,
                        length: this.length,
                        orderText: [{
                            column: "addTimeStamp",
                            dir: "desc"
                        }],
                        searchText: _this.searchText,
                        type: 1
                    }),
                    success: function(data, textStatus) {
                        if (data.code != 0) {
                            Toast.fire({
                                icon: 'error',
                                text: data.msg
                            })
                            return
                        }
                        data.data.list.forEach(f => {
                            _this.videoList.push(f)
                            $.ajax({
                                url: f.coverImgUrl,
                                success: function(data, textStatus) {
                                    f.coverImgUrl = decryptFn(data)
                                }
                            })
                        })
                        if (data.data.list.length == _this.length) {
                            Toast.fire({
                                icon: 'success',
                                text: `${_this.page*_this.length}/${data.data.count}`
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
var search = Object.fromEntries(new URLSearchParams(location.search))
$("title").text(`搜索 - ${search.search ? search.search : ""}`)

vm.searchText = search.search ? search.search : ""
vm.getList()
window.addEventListener('scroll', function(e) {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    if (scrollHeight <= scrollTop + clientHeight + 300 && vm.canLoad) {
        vm.getList()
    }
})