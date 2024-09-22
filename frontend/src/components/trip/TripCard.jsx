import {formatDate} from '../../utils/utils'

const TripCard = ({ trip }) => {

    return (
        <div className="card glass w-[280px] p-5">
            <figure>
                <img
                    src="https://media.istockphoto.com/id/938955554/es/vector/puntero-de-navegador-gps-de-rojo-en-el-mapa-de-la-ciudad-de-un-lugar-a-otro-stock-vector.jpg?s=1024x1024&w=is&k=20&c=_reNJ7pBmGSUsroWJgKeKSuUQmne4D_V1nRWKUGE_Jw="
                    alt={trip.origin} />
            </figure>
            <div className="card-body text-center py-0">
                <h2 className="card-title text-center inline-block mt-2">{trip.status}</h2>
                <p>Origen: {trip.origin}</p>
                <p>Destino: {trip.destination}</p>
                <p>Fecha: {formatDate(trip.date)}</p>
                <p>Pasajeros: {trip.passengers}</p>
                <p>-- FILTROS --</p>
                <div>
                    <button className="btn btn-primary">Reservar</button>
                </div>
            </div>
        </div>
    )
}
export default TripCard