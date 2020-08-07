//Procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
// executar uma ação
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar.

    fields.forEach(function(field) {
        field.value = ""
        
    })


    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
        

 