import { cargarPagina } from "./cargadorPagina";
import { cargarContacto } from "./contacto";
import { cargarMenu } from "./menu";

cargarPagina();

const btnContacto = document.querySelector(".contacto")
const btnInicio = document.querySelector(".inicio")
const btnMenu = document.querySelector(".menu")

btnContacto.addEventListener("click", ()=>{
   cargarContacto()
});

btnInicio.addEventListener("click" , ()=>{
   cargarPagina()
});

btnMenu.addEventListener("click", ()=>{
   cargarMenu()
});