var bot = document.querySelector("input#bot")
bot.addEventListener("click", gerar)

function gerar(){
    let val = document.querySelector("input#tabuada")
    if(val.value.length == 0){
        window.alert("[ERRO] Digite algum valor")
    }else{
        let tabmul = document.querySelector("select#seltabmul")
        let tabdiv = document.querySelector("select#seltabdiv")
        let i = 0
        val = Number(val.value)
        tabmul.innerHTML=""
        tabdiv.innerHTML=""
        while(i<=10){
            let itemMul = document.createElement("option")
            itemMul.text = `${val} x ${i} = ${val*i}`
            itemMul.value = `tab ${i}`
            tabmul.appendChild(itemMul)
            let itemDiv = document.createElement("option")
            itemDiv.text = `${val*i} : ${val} = ${i}`
            itemDiv.value = `tab ${i}`
            tabdiv.appendChild(itemDiv)
            i++
        }
    }
}
