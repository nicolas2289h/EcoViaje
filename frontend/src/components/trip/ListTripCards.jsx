import TripCard from "./TripCard";

const ListTripCards = ({ listDataTrips }) => {
    return (
        <>
            <h2 className="text-start text-lg ms-10 tracking-wider">Próximos viajes</h2>
            <div className="flex justify-center flex-wrap gap-7">
                {
                    listDataTrips?.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    ))
                }
            </div>
        </>
    )
}
export default ListTripCards;
