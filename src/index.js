console.log('%c HI', 'color: firebrick')

let breeds = [];
document.addEventListener('DOMContentLoaded', function () {
    loadImages()
    loadBreedOptions()
});

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
        });
}
function addImage(dogPicUrl) {
    let container = document.querySelector("#dog-image-container")
    let newImageEle = document.createElement('img');
    newImageEle.src = dogPicUrl;
    container.appendChild(newImageEle)
}   