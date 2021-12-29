const os = require('os');
const cluster = require('cluster');

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
console.log(os.cpus().length)

/*
const cpus = os.cpus()

for (let i = 0; i < cpus.length - 2; i++) {
    const CPUCore = cpus[i];
    console.log('Запустить еще один node js процесс')
}
*/

// console.log(process.pid)
// while(true) {

// }

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Воркер с pid = ${worker.process.pid} умер`)
//         if(code===) {
//             cluster.fork()
//         } else {
//             console.log('worker kill')
//         }
//     })
// } else {
//     console.log(`Воркер с pid = ${process.pid} запущен`)
//     setInterval(() => {
//         console.log(`Воркер с pid = ${process.pid} все еще работает`)
//     }, 5000)
// }