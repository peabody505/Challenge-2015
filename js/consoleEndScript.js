        $(document).bind("contextmenu", function (e) {
            e.preventDefault();
        });

        function focus() {
            $('.console-text').focus();
        }


        window.onkeydown = function (e) {
            var code = e.keyCode ? e.keyCode : e.which;
            var command = $('.console-text').val().toUpperCase();
            if (code === 13) {
                if (command === 'WIN') {
                    $('body').html('');
                } else {
                    $('.main-console-load').css('color', '#ff0000');
                    $('.console-text').val('Error: Unknown command.');
                    setTimeout(function () {
                        window.location = '4h4t29w8h4t982h34p9t8i.html';
                    }, 1000);
                }
            }
        };

        window.onclick = function (e) {
            $('.console-text').focus();
        }