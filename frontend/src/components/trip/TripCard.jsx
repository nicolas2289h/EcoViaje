import { formatDate } from '../../utils/utils'

const TripCard = ({ trip }) => {
    const { filters } = trip

    return (
        <div className="card glass w-[280px] p-3">
            <figure>
                <img
                    src="https://media.istockphoto.com/id/938955554/es/vector/puntero-de-navegador-gps-de-rojo-en-el-mapa-de-la-ciudad-de-un-lugar-a-otro-stock-vector.jpg?s=1024x1024&w=is&k=20&c=_reNJ7pBmGSUsroWJgKeKSuUQmne4D_V1nRWKUGE_Jw="
                    alt={trip.origin} />
            </figure>
            <div className="card-body text-center py-0">
                <h2 className="card-title capitalize text-center inline-block mt-2">{trip.status}</h2>
                <p>Origen: {trip.origin}</p>
                <p>Destino: {trip.destination}</p>
                <p>Fecha: {formatDate(trip.date)}</p>
                <p>Pasajeros: {trip.passengers}</p>
                {/* Filtros */}
                <div className='flex gap-1 flex-wrap'>
                    <div className="badge border-yellow-200 text-yellow-200 badge-outline text-xs">{filters.pets ? 'Mascotas' : 'No Mascotas'}</div>
                    <div className="badge border-cyan-300 text-cyan-300 badge-outline text-xs">{filters.smokers ? 'Fumadores' : 'No Fumadores'}</div>
                    <div className="badge badge-secondary badge-outline text-xs">{filters.children ? 'Niños' : 'No Niños'}</div>
                    <div className="badge border-green-300 text-green-300 badge-outline text-xs">Hasta ${filters.maxPrice}</div>
                </div>
                <div>
                    <button className="btn btn-primary mt-1">Reservar</button>
                </div>
            </div>
        </div>
    )
}
export default TripCard