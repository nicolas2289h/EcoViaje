import TripCard from "./TripCard";

const ListTripCards = ({ listDataTrips }) => {
    return (
        <div className="flex justify-center flex-wrap gap-7 mt-7"> {/* Contenedor interno alineado al inicio con borde */}
            {
                listDataTrips?.map(trip => (
                    <TripCard key={trip.id} trip={trip} />
                ))
            }
        </div>
    )
}
export default ListTripCards;
