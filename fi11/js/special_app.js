const vm = new Vue({
    el: '#app',
    data: {
        videoList: []
    },
    methods: {
        getList: function() {
            var _this = this
            $.ajax({
                url: 'https://www.hxc-api.com/album/getAlbumList',
                type: 'post',
                data: JSON.stringify({
                    length: 99999,
                    page: 1
                }),
                contentType: 'application/json',
                success: function(data, textStatus) {
                    if (data.code != 0) {
                        Toast.fire({
                            icon: 'error',
                            text: data.msg
                        })
                    } else {
                        data.data.list.forEach(f => {
                            _this.videoList.push(f)
                            $.ajax({
                                url: f.coverImageX,
                                success: function(data, textStatus) {
                                    f.coverImageX = decryptFn(data)
                                }
                            })
                        })
                    }
                }
            })
        },
        playVideo: function(id) {
            window.open(`./special_type.html?albumId=${id}`)
        }
    }
})

vm.getList()