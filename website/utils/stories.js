const stories = [
  {
    title:"'¿Él?', de Guy de Maupassant",
    description: "'¿Él?' es un relato de terror psicológico perpetrado por el gran escritor Guy de Maupassant, escrito y prohibido en el año 1883, 'por respeto a la moral', es editado y finalmente publicado al año siguiente. En este relato Maupassant muestra que el miedo a algo es tanto más perturbador cuando aquello que se teme se enraíza en lo más profundo de nuestro interior, hasta llegar a convertirse en  parte orgánica de nuestra propia existencia.",
    img:'/img/recort-640x486.png'
  }
,
  {
    title:"'El amo de Moxon', de Ambrose Bierce (1899)",
    description:"'El amo de Moxon' es un relato fantástico del escritor norteamericano Amborse Bierce, publicado en el año 1899. La ciencia ficción, que como género se afincaría en las décadas posteriores, vería en este escritor lleno de misterio un antecedente notable a su pregunta cliché: ¿es posible dotar de conciencia a la maquinaria creada por el hombre?",
    img:'/img/the chess game-2.jpg'
  }
,
  {
    title:"'El asesino se arrepiente', de Alberto Ramponelli",
    description:"'El asesino se arrepiente' es un relato breve del escritor argentino Alberto Ramponelli, publicado en el año 2013 en el libro de relatos Esperando a los tártaros. El cuento narra la peripecia de un hombre luego de cometer un crimen y cómo éste determina la degradación de su realidad y la instauración de un mundo en donde lo fantasmático toma fuerza, hasta apoderarse de lo real.",
    img:"/img/Manos.jpg"
  }
]
module.exports = stories











// const request = require('postman-request');

// const getAllStories = (callback) => {
//     request('http://localhost:3001/clasicos', (error, res, body) => {
//         if(error){
//           console.log('Error', error)
//           return callback(error, undefined);
//         }
//         if (res){
//             if(body){
//                return callback(undefined, body);
//             }
//             callback("Aquí no hay cuentos", undefined);
//         }
//     });
// }


// module.exports= {
 
//   getAllStories

// }
