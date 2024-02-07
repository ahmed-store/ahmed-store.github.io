        ///////////////////////////////////
        var MyNavbar = document.getElementsByClassName('navbar')[0];
        window.onscroll = function () {
            if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
                MyNavbar.style.backgroundColor = "#fff";
                MyNavbar.style.boxShadow = "10px 10px 15px gray";
            }
            else {
                MyNavbar.style.backgroundColor = "";
                MyNavbar.style.boxShadow = "";
            }
        };

        // var menu = document.getElementById("MenuItems");
        var menu = document.querySelector("#MenuItems");
        menu.style.maxHeight = "0px";
        function menuToggle() {
            if (menu.style.maxHeight == "0px") {
                menu.style.maxHeight = "200px";
            }
            else {
                menu.style.maxHeight = "0px";
            }
        }

        // var productImg = document.getElementById("ProductImg");
        var productImg = document.querySelector("#ProductImg");
        var smallImg = document.querySelectorAll(".small-img");
        smallImg[0].onclick = function () {
            productImg.src = smallImg[0].src;
        }
        smallImg[1].onclick = function () {
            productImg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function () {
            productImg.src = smallImg[2].src;
        }
        smallImg[3].onclick = function () {
            productImg.src = smallImg[3].src;
        }