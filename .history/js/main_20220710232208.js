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

        item.onclick = function () {
            if (content.classList.contains('active')) {
                content.classList.remove('active')
            } else {
                // $('.list-item-content').classList.remove('active');
                // $('.list-item-content.active').classList.toggle('active');
                content.classList.add('active');
            }

        }
    })

    itemsRight.forEach((item, index) => {
        const content = itemsContentRight[index];
        console.log(content)

        item.onclick = function () {
            content.classList.toggle('active');
        }
    })
}

start();