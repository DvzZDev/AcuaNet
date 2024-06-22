// import { FetchCuencas } from '@/lib/data'

// async function bento() {

//   const cuencas = await FetchCuencas()

//   return (
//     <section className="flex h-full items-center justify-center bg-[#070922]">
//       <div className="m-10 grid min-h-[45rem] w-[70%] grid-cols-1 grid-rows-none gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
//         {cuencas.map((cuenca) => (
//           <div
//             className={`flex flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-70 p-1 text-[1.4rem] transition-all hover:scale-110`}
//             key={cuenca.id_cuenca}
//           >
//             <div className="flex flex-col content-center items-center justify-center">
//               <p>{cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}</p>
//               <p>{`${cuenca.porcentaje_embalsada} %`} </p>
//               <p>
//                 {`${cuenca.porcentaje_embalsada} hm³`} de {`${cuenca.capacidad} hm³`}{' '}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default bento
