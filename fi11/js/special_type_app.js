const vm = new Vue({
    el: '#app',
    data: {
        videoList: [],
        page: 1,
        length: 20,
        albumId: 2,
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
                    url: 'https://www.hxc-api.com/album/getAlbumVideoList',
                    type: 'post',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify({
                        clientType: 1,
                        page: this.page,
                        length: this.length,
                        albumId: parseInt(this.albumId)
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
                            // 加载图片
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
var albumId = 2
albumId = search.albumId != null ? search.albumId : albumId
get_album_title(albumId)

vm.albumId = albumId
vm.getList()
window.addEventListener('scroll', function(e) {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    if (scrollHeight <= scrollTop + clientHeight + 300 && vm.canLoad) {
        vm.getList()
    }
})