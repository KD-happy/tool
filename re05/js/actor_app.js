const vm = new Vue({
    el: '#app',
    data: {
        videoList: []
    },
    methods: {
        getList: function() {
            var _this = this
            $.ajax({
                url: 'https://www.kmqsaq.com/actor/getActorList',
                type: 'post',
                data: JSON.stringify({
                    clientType: 1,
                    length: 99999,
                    page: 1
                }),
                contentType: 'application/json',
                success: function(data, textStatus) {
                    if (data.code != 1) {
                        Toast.fire({
                            icon: 'error',
                            text: data.message
                        })
                    } else {
                        let album_list = JSON.parse(aesDecrypt(data.data))
                        console.log(album_list)
                        album_list.list.forEach(f => {
                            _this.videoList.push(f)
                            $.ajax({
                                url: f.headIco,
                                success: function(data, textStatus) {
                                    f.headIco = `data:image/jpg;base64,${data.replace(/^kuaimaoshipin/, "")}`
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