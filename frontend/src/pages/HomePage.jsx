import { useState } from "react";
import ListTripCards from "../components/trip/ListTripCards"
import TripForm from "../components/trip/TripForm"
import initialDataTrips from '../utils/initialDataTrips.json';

const HomePage = () => {
  let [listDataTrips, setListDataTrips] = useState(initialDataTrips)

  return (
    <main className="my-7 flex flex-col gap-7">
      <h1>Buscá tu viaje!</h1>
      <TripForm />
      <ListTripCards listDataTrips={listDataTrips} />
    </main>
  )
}
export default HomePage