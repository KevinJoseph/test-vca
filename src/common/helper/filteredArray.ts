export function filteredArray(array: string[]) {
  const result = array.filter(function (ele, pos) {
    return array.indexOf(ele) == pos;
  });

  return result;
}

// otra forma de realizarlo: Usa Set para eliminar los duplicados en JavaScript con la sintaxis de ECMAScript 6 spread
// let uniqueOptions = [...new Set(options)];
