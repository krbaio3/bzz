export interface Usuario {
  nombreCompleto: NombreCompleto;
  email: string;
}

interface NombreCompleto {
  nombre: string;
  apellido: string;
}
