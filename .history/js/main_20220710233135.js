const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const itemsLeft = $$(".left-item");
const itemsContent = $$(".list-item-content");

const itemsRight = $$(".right-item");
const itemsContentRight = $$(".list-item-content-Right");


function start() {
    itemsLeft.forEach((item, index) => {
        const content = itemsContent[index];
        console.log(content)

        item.onclick = function (e) {
            if (content.classList.contains('active')) {
                content.classList.remove('active')
            } 
                // content.classList.add('active');
                e.target.className = "active";

            // else {
            //     // $('.list-item-content').classList.remove('active');
            //     // $('.list-item-content.active').classList.toggle('active');
            //     content.classList.add('active');
            // }

        }
    })

    // var element = document.getElementsByClassName("nav-list")[0];

    // element.addEventListener("click", myFunction);
    // function myFunction(e) {
    //     var elems = document.querySelector(".active");
    //     if (elems != null) {
    //         elems.classList.remove("active");
    //     }
    //     e.target.className = "active";
    // }

    itemsRight.forEach((item, index) => {
        const content = itemsContentRight[index];
        console.log(content)

        item.onclick = function () {
            content.classList.toggle('active');
        }
    })
}

start();