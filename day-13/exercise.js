//  country 
// Number 1
const countrie = [
    'Indonesia',
    'Japan',
    'Singapore',
    'Germany',
    'United State',
    'Russia',
    'Malaysia'
]

console.table(countrie)

// Number 2
const countries = {
    countries1: 'Indonesia',
    countries2: 'Japan',
    countries3: 'Singapore',
    countries4: 'Germany',
    countries5: 'United State',
    countries6: 'Russia',
    countries7: 'Malaysia'
}
console.table(countries)

console.group('Array Negara : ')
console.log(countrie)
console.groupEnd()

console.group('Object Negara : ')
console.log(countries)
console.groupEnd()