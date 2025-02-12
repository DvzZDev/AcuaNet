export default function FilterHistoricalData({ data }) {
  console.log(data)
  const filteredData = data.map((item) => {
    return {
      fecha: new Date(item.fecha),
      volumen_actual: item.volumen_actual,
      porcentaje: item.porcentaje,
    }
  })
  console.log(filteredData)
}
