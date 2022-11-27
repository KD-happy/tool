const vm = new Vue({
    el: '#app',
    data: {
        videoList: []
    },
    methods: {
        getList: function() {
            var _this = this
            $.ajax({
                url: 'https://www.hxc-api.com/actor/getActorList',
                type: 'post',
                data: JSON.stringify({
                    clientType: 1,
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
                                url: f.headIco,
                                success: function(data, textStatus) {
                                    f.headIco = decryptFn(data)
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