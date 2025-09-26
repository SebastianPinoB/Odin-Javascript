export function cargarPagina() {
   const content = document.getElementById("content");
   //se limpia la pantalla
   content.textContent = ""
   // Ejemplo de estructura
   const heading = document.createElement("h1");
   heading.textContent = "Bienvenido a mi restaurante";

   const para = document.createElement("p");
   para.textContent = "Este contenido fue generado con JavaScript.";

   // Los agregamos al div#content
   content.appendChild(heading);
   content.appendChild(para);
}