// procurar o botão
document.querySelector("#add-time")

// quando clicar no botão
.addEventListener('click', cloneField)

// executar uma ação
function cloneField(){

    // Duplicar campos. Quais campos:   
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bolean: true or false
   
    //    Pegar os campos. Quais campos?
   const fields = newFieldContainer.querySelectorAll('input')

    //    Para cada Campo mudar
   fields.forEach(function(field){
    //Pegar o Field do Momento e limpar
       field.value = ""
   })
   //mostrar novo campo na página. Onde?
    document.querySelector('.horarios').appendChild(newFieldContainer)
}