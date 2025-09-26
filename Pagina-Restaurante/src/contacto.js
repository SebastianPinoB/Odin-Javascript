
export function cargarContacto(){
   const content = document.getElementById("content")
   //Se limpia la pantalla
   content.textContent = ""
   const textoContactoH1 = document.createElement("h1")
   textoContactoH1.textContent = "Este es la info de contacto"

   const textoContactoP = document.createElement("p")
   textoContactoP.textContent = "Informacion sobre contactos va aqui equisde"

   content.appendChild(textoContactoH1)
   content.appendChild(textoContactoP)
}