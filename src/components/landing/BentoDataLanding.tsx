import { GetCuencas, GetEsp, GetEmbalses } from "db/queries/select"
import Bento from "./Bento"

async function BentoDataLandin() {
  const cuencas = await GetCuencas()
  const embalses = await GetEmbalses()
  const esp = await GetEsp()
  const variacionEmbalsesDes = embalses
    .filter((embalse) => embalse.variacion_ultima_semanapor != null)
    .sort((a, b) => (a.variacion_ultima_semanapor ?? 0) - (b.variacion_ultima_semanapor ?? 0))
    .slice(0, 3)
  const variacionEmbalsesAsc = embalses
    .filter((embalse) => embalse.variacion_ultima_semanapor != null)
    .sort((a, b) => (b.variacion_ultima_semanapor ?? 0) - (a.variacion_ultima_semanapor ?? 0))
    .slice(0, 2)
  const variacionCuencasDes = cuencas
    .filter((cuenca) => cuenca.porcentaje_variacion != null)
    .sort((a, b) => (a.porcentaje_variacion ?? 0) - (b.porcentaje_variacion ?? 0))
    .slice(0, 2)
  const variacionCuencasAsc = cuencas
    .filter((cuenca) => cuenca.porcentaje_variacion != null)
    .sort((a, b) => (b.porcentaje_variacion ?? 0) - (a.porcentaje_variacion ?? 0))
    .slice(0, 2)
  const variacionCuencas = [...variacionCuencasAsc, ...variacionCuencasDes]
  const variacionEmbalses = [...variacionEmbalsesAsc, ...variacionEmbalsesDes]

  return (
    <Bento
      cuencas={cuencas}
      variacionCuencas={variacionCuencas}
      variacionEmbalses={variacionEmbalses}
      esp={esp}
    />
  )
}

export default BentoDataLandin
