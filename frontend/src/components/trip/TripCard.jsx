import { formatDate } from '../../utils/utils'
import imgRoute from '../../assets/img/route-1.jpg'

const TripCard = ({ trip }) => {
    const { filters } = trip

    return (
        <div className="card rounded-lg glass bg-black/90 w-[280px] p-3">
            <figure>
                <img
                    src={imgRoute}
                    alt={trip.origin} />
            </figure>
            <div className="card-body text-center py-0">
                <h2 className="card-title capitalize text-center inline-block mt-2">{trip.status}</h2>
                {/* <p>Conductor: {trip.driver}</p> */}
                <p>Origen: {trip.origin}</p>
                <p>Destino: {trip.destination}</p>
                <p>{formatDate(trip.date)} a las {trip.time} hs</p>
                <p>Pasajeros: {trip.passengers}</p>
                {/* Filtros */}
                <div className='flex gap-1 flex-wrap'>
                    <div className="badge border-yellow-200 text-yellow-200 badge-outline text-xs">{filters.pets ? 'Mascotas' : 'No Mascotas'}</div>
                    <div className="badge border-cyan-300 text-cyan-300 badge-outline text-xs">{filters.smokers ? 'Fumadores' : 'No Fumadores'}</div>
                    <div className="badge border-pink-500 badge-outline text-xs text-pink-300">{filters.children ? 'Niños' : 'No Niños'}</div>
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