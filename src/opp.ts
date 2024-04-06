// // Una clase básica
// class Persona {
//     nombre: string;
//     edad: number;
//     constructor(nombre: string, edad: number) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
//   }
  
//   // Extendemos la clase Persona y añadimos nuevos campos llamandola Persona
//   class Agenda extends Persona {
//     direccion: string;
//     telefono: number;
//     constructor(nombre: string, edad: number, direccion: string, telefono: number) {
//       // Usamos super para llamar al constructor de la clase padre
//       super(nombre, edad);
//       this.direccion = direccion;
//       this.telefono = telefono;
//     }
//   }
//   type Pepito = {
//     nombre: string;
//     edad: number;
//   }
//   // Usamos una interface como contrato de la clase AgendaContrato
//   interface IAgenda {
//     nombre: string;
//     edad: number;
//   }
  
//   // Si modificamos las propiedades de la interface, la clase que la implementa nos obliga a añadir o borrar los nuevos campos
//   class AgendaContrato implements IAgenda {
//     nombre: string;
//     edad: number;
//     constructor(nombre: string) {
//       this.nombre = nombre;
//     }
//   }
  
//   4

  
//   interface IPersona {
//     nombre: string
//     edad: number
//     mascota: boolean
//     estaVivo: boolean
//   }
//   export const Posicion = {
//     Numerale: "Numerale",
//     Avvocato: "Avvocato",
//     Cassetto: "Cassetto",
//     Asociado: "Asociado",
//     Soldado: "Soldado",
//     Antonegra: "Antonegra",
//     Capodecina: "Capodecina",
//     Caporegime: "Caporegime",
//     Consiglieri: "Consiglieri",
//   }
//   type PosicionValores<T> = T[keyof T]
//   type PosicionReal = PosicionValores<typeof Posicion>
//   export class Familia {
//     nombreFamilia: string
//     posicion: PosicionReal
//     constructor(nombreFamilia: string, posicion: PosicionReal) {
//       this.nombreFamilia = nombreFamilia
//       this.posicion = posicion
//     }
//   }