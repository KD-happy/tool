const vm = new Vue({
    el: '#app',
    data: {
        videoList: []
    },
    methods: {
        getList: function() {
            var _this = this
            $.ajax({
                url: 'https://api.jgf985.com/WebApp/WebVideo/VideoActorList?size=0',
                type: 'GET',
                contentType: 'application/json',
                success: function(data, textStatus) {
                    console.log(data)
                    if (data.code != 200200) {
                        Toast.fire({
                            icon: 'error',
                            text: data.message
                        })
                    } else {
                        data.data.list.forEach(f => {
                            f.headIco = ""
                            _this.videoList.push(f)
                            $.ajax({
                                url: `${f.ftp_img_url}/${f.img}`,
                                success: function(data, textStatus) {
                                    f.headIco = data.replace(";base64,yinghua", ";base64,")
                                }
                            })
                        })
                    }
                }
            })
        },
        playVideo: function(id) {
            window.open(`./actor_type.html?actorId=${id}`)
        }
    }
})

vm.getList()