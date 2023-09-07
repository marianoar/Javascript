'use strict';

// How to filter duplicate objects from array by multiple properties
const lineas = [
  {
    IdProducto: 120,
    Cantidad: 1,
    IdAlmacen: 1,
  },
  {
    IdProducto: 1109,
    Cantidad: 2,
    IdAlmacen: 14,
  },
  {
    IdProducto: 147,
    Cantidad: 2,
    IdAlmacen: 19,
  },
  {
    IdProducto: 1109,
    Cantidad: 2,
    IdAlmacen: 14,
  },
  {
    IdProducto: 1109,
    Cantidad: 2,
    IdAlmacen: 14,
  },
  {
    IdProducto: 147,
    Cantidad: 2,
    IdAlmacen: 19,
  },
];

console.log(lineas);

const duplicatedRow = lineas.filter(
  (obj, index) =>
    lineas.findIndex(
      item =>
        item.IdProducto === obj.IdProducto && item.IdAlmacen === obj.IdAlmacen
    ) !== index
);
console.log(duplicatedRow);