/* El usuario va a diligenciar la informacion, cada vez que diligencie la informacion, esta informacion se debe almacenar 
para posteriormente visualizasrse en una tabla cuando el usuario de click en el boton mostrar todos. la tabla debe 
contener los datos obtenidos a traves del formulario y ademas los siguientes datos. IMC HOmbre?, Mujer? 
1. Crear un formulario con los campos requeridos para una persona.
2. Obtener los datos del formulario, crear un objeto persona y almacenarlo en un store.
3. Limpiar el formulario para ingresar el nuevo usuario.
4. Crear un boton en la pagina con la etiqueta mostrar todos.
5. Cuando se de click al boton mostrar todos, se debe poder sacar los usuarios del store y mostrarlos en una tabla en el html.


*/
const personas = [];

function Persona (nombre='', edad=0, dni=0, sexo='hombre', peso=0, altura=0){
  this.nombre = nombre;
  this.edad = edad;
  this.dni = dni;
  this.sexo = sexo;
  this.peso = peso;
  this.altura = altura;

}

Persona.prototype.esMayorDeEdad = function (){
  return (this.edad >= 18);
}
Persona.prototype.comprobarSexo = function(sexo){
  return (sexo == this.sexo);
}
Persona.prototype.imc = function(){
    let altura = parseInt(this.altura)/100;
    let imc = this.peso/(altura*altura);
    let resultado = 0;
    if (imc < 20)
    {
      resultado = -1;
    }
    else if (imc >= 20 && imc <= 25)
    {
      resultado = 0;
    }
    else{
    
      resultado = 1;
    }
return resultado;
};

function getData() {
  let nombre = document.getElementById('input-name').value;
  let edad = document.getElementById('input-age').value;
  let dni = document.getElementById('input-dni').value;
  let sexo = document.getElementById('input-sex').value;
  let peso = document.getElementById('input-weight').value;
  let altura = document.getElementById('input-height').value;
  let persona = new Persona(nombre, edad, dni, sexo, peso, altura);
  personas.push(persona);
  console.log(personas);
  let form = document.getElementById('form')
  form.reset();
}

function showAll(){
  let table = document.getElementById('table');
  let tbody = document.getElementById('tbody');
  personas.forEach(persona =>{
    let row = document.createElement('tr')
    row.innerHTML = `
                <td>${persona.nombre}</td>
                <td>${persona.edad}</td>
                <td>${persona.dni}</td>
                <td>${persona.sexo}</td>
                <td>${persona.peso}</td>
                <td>${persona.altura}</td>
                <td>${persona.imc()}</td>
                <td>${persona.comprobarSexo('hombre')}</td>
                <td>${persona.comprobarSexo('mujer')}</td>
              `
    tbody.appendChild(row);          
  })
  table.classList.remove('d-none')
}

/* Homework
1. Calculate the IMC
2. Create the local storage for it
*/

