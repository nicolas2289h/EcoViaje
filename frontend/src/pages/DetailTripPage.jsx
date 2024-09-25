import { useParams } from "react-router-dom"
import DetailTrip from "../components/trip/TripDetail"

const DetailTripPage = () => {
    const { id } = useParams()
    return (
        <div>
            <DetailTrip id={id} />
        </div>
    )
}
export default DetailTripPage