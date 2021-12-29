const path = require('path');

// console.log('Склеить участки пути', path.join('first', 'second', 'third'));
// console.log(path.join(__dirname, 'second'));

// console.log('Получить абсолютный путь', path.resolve('first', 'second'));
// console.log('Получить абсолютный путь', path.resolve('/first', 'second'));

const fullPath = path.resolve('path.js')
// console.log('Парсинг пути', path.parse(fullPath))
console.log('разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullPath))
console.log('Расширение файла', path.extname(fullPath))

//------------------------------------------------------------------------------

const siteURL = 'https://rt.pornhub.com/video?o=ht&cc=ru'
const url = new URL(siteURL);
console.log(url)