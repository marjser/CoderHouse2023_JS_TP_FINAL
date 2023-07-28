//Estudiane Mariano Serrrano
//Coderhouse 2023
//Curso Javascript


//Trabajo Final: Simulador interactivo


//Código


let arrayCliente = JSON.parse(localStorage.getItem("clienteLS")) || 'datosVacio';







const app = document.getElementById('app')
const rooms = document.getElementById('rooms')
const hotel = document.getElementById('hotel')


const button1 = document.getElementById("firstButton")
const button3 = document.getElementById("secondButton")

let input1 = document.querySelector("#inputName")
let input2 = document.querySelector("#inputSurname")
let input3 = document.querySelector('#inputAge')





const dato1 = document.getElementById('ingresoDato1')
const dato2 = document.getElementById('ingresoDato2')

let inputDate = document.querySelector('#date')
let inputDays = document.querySelector('#days')







inputDate.addEventListener('input', () => {
    clienteReserva.fecha = inputDate.value
})

inputDays.addEventListener('input', () => {
    clienteReserva.dias = inputDays.value
})

const clienteReserva = {
    id: 9,
    nombre: "",
    apellido: "",
    edad: "",
    fecha: "",
    habitacion: "",
    dias: 0,
    precio: 0,
}



if (arrayCliente == 'datosVacio') {
    console.log('Los datos están vacios')
    arrayCliente = []
    input1.addEventListener('input', () => {
        clienteReserva.nombre = input1.value
    })
    
    input2.addEventListener('input', () => {
        clienteReserva.apellido = input2.value
    })
    
    input3.addEventListener('input', () => {
        clienteReserva.edad = input3.value
    })
} else {
    clienteReserva.nombre = arrayCliente[0]
    clienteReserva.apellido = arrayCliente[1]
    clienteReserva.edad = arrayCliente[2]
    clienteReserva.fecha = arrayCliente[3]
    clienteReserva.dias = arrayCliente[4]
    console.log(clienteReserva)
    dato1.innerHTML = `Bienvenido Señor/a ${clienteReserva.apellido}`
    dato1.classList.add("text-white");
}



// PRUEBA
console.log(arrayCliente)




class ClienteNuevo{
    constructor(room){
        const { id , nombre , apellido, edad, fecha, habitacion, dias, precio } = room;
       this.id = id;
       this.apellido = apellido;
       this.nombre = nombre;
       this.edad = edad;
       this.fecha  = fecha;
       this.habitacion = habitacion;
       this.dias = dias;
       this.precio = precio;
    }
}





console.log(clienteReserva)




function toCapital(str) {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    str = str2;
    console.log(str2);
}

const avisoFalta = document.getElementById('falta1')

button1.addEventListener("click", () => {
        if ((clienteReserva.nombre == "" || clienteReserva.nombre == null) || (clienteReserva.apellido == "" || clienteReserva.apellido == null) || (clienteReserva.edad == "" || clienteReserva.edad == null)) { 

            if (clienteReserva.edad == "" || clienteReserva.edad == null) {

                Swal.fire({
                    title: 'Atención!',
                    text: 'Usted debe ingresar su edad.',
                    icon: 'warning',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#3085d6'
                    })
            }
            if (clienteReserva.apellido == "" || clienteReserva.apellido == null) {
                Swal.fire({
                    title: 'Atención!',
                    text: 'Usted debe ingresar su apellido.',
                    icon: 'warning',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#3085d6'
                    })
            }
            if (clienteReserva.nombre == "" || clienteReserva.nombre == null) {
                Swal.fire({
                    title: 'Atención!',
                    text: 'Usted debe ingresar su nombre.',
                    icon: 'warning',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#3085d6'
                    })
            }            
    }  else {          
        dato1.innerHTML = `Bienvenido Señor/a ${clienteReserva.apellido}`
        dato1.classList.add("text-white");
        arrayCliente.push(clienteReserva.nombre)
        arrayCliente.push(clienteReserva.apellido)
        arrayCliente.push(clienteReserva.edad)
        console.log('Se cargaron datos de nombre, apellido y edad a cliente')
        localStorage.setItem("clienteLS",JSON.stringify(arrayCliente))
        }
})

//Reserva de Fecha y cantidad de días

console.log('fecha: ' +clienteReserva.fecha)



button3.addEventListener("click", () => {
    if ((clienteReserva.fecha == "" || clienteReserva.fecha == null) || (clienteReserva.dias == "" || clienteReserva.dias == null)) {
        if ((clienteReserva.fecha == "" || clienteReserva.fecha == null)) {
            Swal.fire({
                title: 'Atención!',
                text: 'Usted debe ingresar una fecha.',
                icon: 'warning',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#3085d6'
                })           
        }
        if ((clienteReserva.dias == "" || clienteReserva.dias == null)) {
            Swal.fire({
                title: 'Atención!',
                text: 'Usted debe ingresar la cantidad de días que desea reservar.',
                icon: 'warning',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#3085d6'
                })           
        }
    }
    else {

    dato2.innerHTML = `Usted reservó la cantidad de ${clienteReserva.dias} días a partir del dia ${clienteReserva.fecha}.`
    dato2.classList.add("text-white")
    arrayCliente.push(clienteReserva.fecha)
    arrayCliente.push(clienteReserva.dias)
    localStorage.setItem("clienteLS",JSON.stringify(arrayCliente))
    }
})


//Obtencion de datos -----------------------------------------------------------------------------

let form = document.getElementById('provinciaSel')

let menu = form.provincias

let option = form.provincias.options

let prov = option


 const buttonProv = document.getElementById("butonProv")
 const oferta = document.getElementById("oferta")

 let option1 = ''
 let provincia = ''
 let ciudades = [];



buttonProv.addEventListener("click", () => {
        let index = prov.selectedIndex
        provincia = prov[index].value
        

        console.log('selected: '+ provincia)
        fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia}&max=1`)
.then( (resp) => resp.json() )
.then( (data) => {
    ciudades = data.departamentos

    
    ciudades.forEach((el)=>{

        oferta.innerHTML = ` <h5>Nuestro hotel disponible se encuentra en la ciudad de ${el.nombre}.</h5>`
        

        console.log(el.nombre)
        hotel.appendChild(oferta)
        })
})
})



// Selección de habitación

const arrayRooms = [{id:1,
                    tipo:"Chica",
                    precio:5000,
                    cama: 'Mediana',
                    ambientes: '1',
                    espacio: 'Amplio',
                    balcones: '1 con vista a ciudad',
}]

arrayRooms.push({id:2,
    tipo:"Mediana",
    precio:12000,
    cama: 'Grande',
    ambientes: '2',
    espacio: 'Muy amplio',
    balcones: '1 con vista a paisaje/playa',
})

arrayRooms.push({id:2,
        tipo:"Grande",
        precio:20000,
        cama: 'Grande',
        ambientes: '3',
        espacio: 'Super amplio',
        balcones: '2 con vista a paisaje/playa',
})

const roomSelect = []

const roomSelected = (roomSelected, room) => {
    roomSelect.push(room.tipo)
    clienteReserva.habitacion = room.tipo
}

const opConfirm = document.getElementById('opConfirm')



arrayRooms.forEach((el)=>{
        const tarjeta = document.createElement("div")

        tarjeta.innerHTML = `
        <div class="col">
<div class="card mb-4 rounded-3 shadow-sm">
  <div class="card-header py-3">
    <h4 class="my-0 fw-normal">${el.tipo}</h4>
  </div>
  <div class="card-body">
    <h1 class="card-title pricing-card-title">$${el.precio}<small class="text-muted fw-light">/día</small></h1>
    <ul class="list-unstyled mt-3 mb-4">
      <li>Cantidad de ambientes: ${el.ambientes}</li>
      <li>Espacio: ${el.espacio}</li>
      <li>Tamaño de cama: ${el.cama}</li>
      <li>Balcones: ${el.balcones}</li>
    </ul>
  </div>
</div>
</div>`



        const buttonSelect = document.createElement("button");
        buttonSelect.innerText = "Seleccionar";
        buttonSelect.classList.add("w-100")
        buttonSelect.classList.add("btn")
        buttonSelect.classList.add("btn-lg")
        buttonSelect.classList.add("btn-success")
        tarjeta.appendChild(buttonSelect)
        buttonSelect.addEventListener("click",()=>{
            roomSelected(roomSelect,el)
            rooms.innerHTML = `Usted eligío la habitación ${roomSelect}.`
            rooms.classList.add("text-white");
            arrayCliente.push(clienteReserva.habitacion)
            localStorage.setItem("clienteLS",JSON.stringify(arrayCliente))
            
            const buttonConfirm = document.createElement("button");
            buttonConfirm.innerText = "Confirmar";
            buttonConfirm.classList.add("btn")
            buttonConfirm.classList.add("btn-lg")
            buttonConfirm.classList.add("btn-success")
            opConfirm.appendChild(buttonConfirm) 
            buttonConfirm.addEventListener("click", ()=>{
                localStorage.clear() 
                app.innerHTML = `<h2>Se realizó con éxito su reserva.</h2>`
                app.classList.add('text-white')

                const buttonRefresh = document.createElement("button");
                buttonRefresh.classList.add("btn")
                buttonRefresh.classList.add("btn-lg")
                buttonRefresh.classList.add("btn-success")
                buttonRefresh.innerText = 'Volver a página principal'
                
                buttonRefresh.addEventListener("click", ()=> {location.reload()})
                app.appendChild(buttonRefresh)
            })
            
        })

        tarjeta.appendChild(buttonSelect);
        rooms.appendChild(tarjeta);

    })




const clientesSorteo = [
    {id: 0, nombre: "Miranda Rodriguez", fecha: ['6', 'Marzo', '2023'], habitacion: "Mediana", dias: 15, precio: 1500},
    {id: 1, nombre: "Joaquín Sanchez", fecha: ['21', 'Junio', '2023'], habitacion: "Chica", dias: 5, precio: 250},
    {id: 2, nombre: "Roxana Schaffer", fecha: ['25', 'Enero', '2023'], habitacion: "Grande", dias: 15, precio: 3000},
    {id: 3, nombre: "Oscar Castellanos", fecha: ['13', 'Julio', '2023'], habitacion: "Mediana", dias: 40, precio: 4000},
    {id: 4, nombre: "Tomas Miramonti", fecha: ['24', 'Noviembre', '2023'], habitacion: "Chica", dias: 30, precio: 1500},
    {id: 5, nombre: "Camila Juarez", fecha: ['22', 'Febrero', '2023'], habitacion: "Mediana", dias: 7, precio: 700},
    {id: 6, nombre: "Jorge Laverni", fecha: ['11', 'Septiembre', '2023'], habitacion: "Mediana", dias: 25, precio: 2500},
    {id: 7, nombre: "Norberto Alonso", fecha: ['9', 'Mayo', '2023'], habitacion: "Grande", dias: 11, precio: 2200},
    {id: 8, nombre: "Nancy Pluma", fecha: ['21', 'Marzo', '2023'], habitacion: "Grande", dias: 17, precio: 3400}
]



