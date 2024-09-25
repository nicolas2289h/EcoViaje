const DriverListReviews = ({ driver }) => {
    return (
        <ul className="w-[400px] border-gray-700 border p-5 rounded-md">
            {
                driver.details.reviews.map((item, index) => (
                    <div key={index}>
                        <li className="mb-2">
                            <p className="text-start">{item}</p>
                        </li>
                        <div className="w-90 my-3 bg-gray-700 h-[0.5px]"></div>
                    </div>
                ))
            }
        </ul>
    )
}
export default DriverListReviews