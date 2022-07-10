const items = document.querySelectorAll(".left-item");
const itemsContent = document.querySelectorAll(".list-item-content");
// console.log(itemsContent)

function start() {
    items.forEach((item, index) => {
        const content = itemsContent[index];
        console.log(content)

        item.onclick = function() {
            // this.classList.add('list-item-active')
            content.classList.add('active');
        }
    })
}

start();