// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
btn.style.backgroundColor="#a78b71"
  btn.style.color="#a78b71" 
  clonedBtn.innerText="Я изменю тебя"
  document.body.append(clonedBtn)
  
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener("click",()=>{
  btn.style.backgroundColor="#9c4a1a"
  btn.style.color="black"

})