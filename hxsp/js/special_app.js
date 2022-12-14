const vm = new Vue({
    el: '#app',
    data: {
        videoList: []
    },
    methods: {
        getList: function() {
            var _this = this
            $.ajax({
                url: 'https://api.jgf985.com/WebApp/VideoKindList?size=0&pid=2',
                type: 'GET',
                contentType: 'application/json',
                success: function(data, textStatus) {
                    if (data.code != 200200) {
                        Toast.fire({
                            icon: 'error',
                            text: data.message
                        })
                    } else {
                        data.data.list.forEach(f => {
                            f.coverImageX = ""
                            _this.videoList.push(f)
                            $.ajax({
                                url: `${f.ftp_img_url}/${f.pic}`,
                                success: function(data, textStatus) {
                                    f.coverImageX = data.replace(";base64,yinghua", ";base64,")
                                }
                            })
                        })
                    }
                }
            })
        },
        playVideo: function(id, title) {
            window.open(`./special_type.html?albumId=${id}&title=${title}`)
        }
    }
})

vm.getList()