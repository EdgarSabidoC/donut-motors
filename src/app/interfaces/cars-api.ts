/**
 * Interfaz para el objeto CarsApi.
 * Define la estructura de los datos de un coche obtenidos de la API.
 */
export interface CarsApi {
  city_mpg: number; // Consumo de combustible en ciudad (millas por galón)
  class: string; // Clase del coche
  combination_mpg: number; // Consumo de combustible combinado (millas por galón)
  cylinders: number; // Número de cilindros del coche
  displacement: number; // Desplazamiento del coche
  drive: string; // Tipo de tracción del coche
  fuel_type: string; // Tipo de combustible del coche
  highway_mpg: number; // Consumo de combustible en carretera (millas por galón)
  make: string; // Marca del coche
  model: string; // Modelo del coche
  transmission: string; // Tipo de transmisión del coche
  year: number; // Año del coche
}

