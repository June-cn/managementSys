/**
 * Created by june.yu on 2017/7/4.
 */
(function (window) {
    var vm = this;
    vm.login = {
        init: function () {
            this.login();
        },
        login: function () {
            $('.login-button').on('click',function () {
                var formData = {};
                formData.username = $('#user-name').val();
                formData.password = $('#user-psw').val();
                $.ajax({
                    type: type,
                    url: url,
                    // contentType: "application/json",
                    // headers: {"token": token},
                    dataType: "json",
                    // data: JSON.stringify(formData),
                    success: function (data) {
                        console.log(data);
                    },
                });
            });
        }
    };
    vm.login.init();
}(window));