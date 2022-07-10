const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const itemsLeft = document.querySelectorAll(".left-item");
const itemsContent = document.querySelectorAll(".list-item-content");

const itemsRight = document.querySelectorAll(".right-item");
const itemsContentRight = document.querySelectorAll(".list-item-content-Right");




function start() {
    itemsLeft.forEach((item, index) => {
        const content = itemsContent[index];
        console.log(content)

        item.onclick = function() {
            $('.list-item-content.active').classList.remove('active');
            content.classList.add('active');
        }
    })

    itemsRight.forEach((item, index) => {
        const content = itemsContentRight[index];
        console.log(content)

        item.onclick = function() {
            content.classList.add('active');
        }
    })
}

start();