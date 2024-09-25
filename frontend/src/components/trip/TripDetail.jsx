import initialDataTrips from '../../utils/initialDataTrips.json'
import Container from '../shared/Container'
import mapa from '../../assets/img/mapa.png'
import DriverRating from '../driver/DriverRating';
import DriverListReviews from '../driver/DriverListReviews';

const TripDetail = ({ id }) => {
    // AGREGAR FETCH PARA OBTENER LA INFORMACION DEL VIAJE (ID)

    const trip = initialDataTrips.find(item => item.id === Number(id))
    const { filters, driver } = trip

    return (
        <Container>
            <h1>Detalles de viaje</h1>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='w-[400px] border-gray-700 border p-2 rounded-md'>
                        <img src={mapa} alt="" />
                        <p className='mb-1 mt-2'>Tiempo estimado: 5 horas y 30 minutos</p>
                    </div>

                    <div className='w-[400px] border-gray-700 border p-3 rounded-md'>
                        <p>Fecha {trip.date}</p>
                        <p>Hora {trip.time}</p>
                        <p>Origen {trip.origin}</p>
                        <p>Destino {trip.destination}</p>
                        <p>Lugares Disponibles: 2</p>
                        <div className='flex gap-1 flex-wrap justify-center border px-1 py-2 mt-2 border-gray-700 border rounded-xl'>
                            <div className="badge border-yellow-200 text-yellow-200 badge-outline text-xs">{filters.pets ? 'Mascotas' : 'No Mascotas'}</div>
                            <div className="badge border-cyan-300 text-cyan-300 badge-outline text-xs">{filters.smokers ? 'Fumadores' : 'No Fumadores'}</div>
                            <div className="badge border-pink-500 badge-outline text-xs text-pink-300">{filters.children ? 'Niños' : 'No Niños'}</div>
                            <div className="badge border-green-300 text-green-300 badge-outline text-xs">Hasta ${filters.maxPrice}</div>
                        </div>
                    </div>

                    <div className='w-[400px] border-gray-700 border p-5 rounded-md flex justify-center items-center gap-8'>
                        <p>TOTAL: $16000</p>
                        {/* <a href="#" className='underline font-bold'>Más Información</a> */}
                        <button className="btn btn-primary mt-1 text-white">Confirmar Reserva</button>
                    </div>
                </div>

                <div className='flex flex-col gap-4 h-500'>
                    <DriverRating driver={driver} />
                    <DriverListReviews driver={driver} />
                </div>
            </div>
        </Container >
    )
}
export default TripDetail