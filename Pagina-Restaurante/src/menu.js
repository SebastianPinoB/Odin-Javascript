export function cargarMenu(){
   const content = document.getElementById("content")
   //Limpiar
   content.textContent = ""

   const textoMenuH1 = document.createElement("H1")
   textoMenuH1.textContent = "Este es el menu"

   const textoMenuP = document.createElement("p")
   textoMenuP.textContent = "Toda la info sobre el menu aqui"

   content.appendChild(textoMenuH1)
   content.appendChild(textoMenuP)

}