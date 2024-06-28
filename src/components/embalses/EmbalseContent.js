import React from 'react'

function EmbalseContent({ data }) {
  return (
    <section className="h-screen bg-[#070922] p-4 text-white flex justify-center">
      <div className=''>
        <h1 className="mb-4 text-2xl">{data.nombre_embalse}</h1>
        <p>ID del Embalse: {data.id_embalse}</p>
        <p>Fecha de Modificación: {new Date(data.fecha_modificacion).toLocaleString()}</p>
        <p>Nombre de la Cuenca: {data.nombre_cuenca}</p>
        <p>Agua Embalsada: {data.agua_embalsada} hm³</p>
        <p>Porcentaje de Agua Embalsada: {data.agua_embalsadapor}%</p>
        <p>
          Variación Última Semana: {data.variacion_ultima_semana} hm³ (
          {data.variacion_ultima_semanapor}%)
        </p>
        <p>Capacidad Total: {data.capacidad_total} hm³</p>
        <p>
          Misma Semana el Último Año: {data.misma_semana_ultimo_año} hm³ (
          {data.misma_semana_ultimo_añopor}%)
        </p>
        <p>
          Misma Semana Hace 10 Años: {data.misma_semana_10años} hm³ (
          {data.misma_semana_10añospor}%)
        </p>
      </div>
    </section>
  )
}

export default EmbalseContent
