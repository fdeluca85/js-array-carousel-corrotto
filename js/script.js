// alert("ciao")

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]; console.log(items);


let fotografie = '';

for (let i = 0; i < items.length; i++){
    fotografie +=`
    <div class="foto">
        <img  src="${items[i]}" alt="">
    </div>`
}
console.log(fotografie);

const box  = document.querySelector(".box");
box.innerHTML = fotografie

const foto = document.querySelector ('.foto');
foto.className = 'foto active';
