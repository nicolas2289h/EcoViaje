import { useState } from "react";
import ListTripCards from "../components/trip/ListTripCards"
import TripForm from "../components/trip/TripForm"
import initialDataTrips from '../utils/initialDataTrips.json';
import Container from "../components/shared/Container";

const HomePage = () => {
  let [listDataTrips] = useState(initialDataTrips)

  return (
    <Container>
      <h1>Buscá tu viaje!</h1>
      <TripForm />
      <ListTripCards listDataTrips={listDataTrips} />
    </Container>
  )
}
export default HomePage