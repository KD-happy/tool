const vm = new Vue({
    el: '#app',
    data: {
        videoList: [],
        page: 1,
        length: 20,
        actorId: 2,
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
                    url: 'https://api.jgf985.com/WebApp/VideoContentsList',
                    type: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8'
                    },
                    data: {
                        page: _this.page,
                        size: _this.length,
                        actor_id: _this.actorId
                    },
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
var actorId = 2
actorId = search.actorId != null ? search.actorId : actorId
get_actor_title(actorId)

vm.actorId = actorId
vm.getList()
window.addEventListener('scroll', function(e) {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    if (scrollHeight <= scrollTop + clientHeight + 300 && vm.canLoad) {
        vm.getList()
    }
})