const itemsLeft = document.querySelectorAll(".left-item");
const itemsContent = document.querySelectorAll(".list-item-content");

const itemsRight = document.querySelectorAll(".right-item");
const itemsContentRight = document.querySelectorAll(".list-item-content");
// console.log(itemsContent)

function start() {
    itemsLeft.forEach((item, index) => {
        const content = itemsContent[index];
        console.log(content)

        item.onclick = function() {
            // this.classList.add('list-item-active')
            content.classList.add('active');
        }
    })
}

start();