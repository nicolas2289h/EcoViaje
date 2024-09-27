import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { UserIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';

import { useState } from "react";

const initialTripData = {
    origin: '',
    destination: '',
    date: '',
    passengers: 1,
    filters: {
        pets: false,
        smokers: false,
        children: false,
    }
};

const TripForm = () => {
    const [tripData, setTripData] = useState(initialTripData);
    const today = new Date().toISOString().split("T")[0];
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    const handleChange = (e) => {
        setTripData({
            ...tripData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(tripData);
    };

    const handleExchangeValues = () => {
        setTripData(prevTripData => ({
            ...prevTripData,
            origin: prevTripData.destination,
            destination: prevTripData.origin
        }));
    };

    return (
        <>
            <form className='flex justify-center items-center gap-2' onSubmit={handleSubmit}>
                <div className="flex items-center border border-gray-700 h-8">
                    <MapPinIcon className="h-4 text-red-500 mx-2" />
                    <input
                        onChange={handleChange}
                        name="origin"
                        value={tripData.origin}
                        type="search"
                        placeholder="Origen"
                        className='outline-none py-1 px-3 h-full'
                    />
                </div>
                <ArrowsRightLeftIcon
                    onClick={handleExchangeValues}
                    className='h-8 w-10 text-gray-500 cursor-pointer border border-gray-700 rounded-md p-[5px]'
                />
                <div className="flex items-center border border-gray-700 h-8">
                    <MapPinIcon className="h-4 text-red-500 mx-2" />
                    <input
                        onChange={handleChange}
                        name="destination"
                        value={tripData.destination}
                        type="search"
                        placeholder="Destino"
                        className='outline-none py-1 px-3 h-full'
                    />
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        name="date"
                        value={tripData.date}
                        type="date"
                        min={today}
                        className="border border-gray-700 h-8 px-3"
                    />
                </div>
                <div className="flex items-center border border-gray-700 h-8">
                    <UserIcon className="h-4 text-blue-500 mx-2" />
                    <input
                        onChange={handleChange}
                        type="number"
                        name="passengers"
                        min={1}
                        max={4}
                        value={tripData.passengers}
                        className="outline-none ps-5 w-[60px] h-full"
                    />
                </div>

                {/* <div onClick={openModal} className="flex items-center overflow-hidden border h-8 justify-center cursor-pointer select-none">
                    <AdjustmentsHorizontalIcon className="h-5 text-blue-500 mx-2" />
                    <span className="px-[7px] py-1">Filtros</span>
                </div> */}
                <div>
                    <button className="border border-gray-700 h-8 w-[90px] rounded-md">Buscar</button>
                </div>
            </form>

            {/* <Modal isModalOpen={isModalOpen} closeModal={closeModal} /> */}
        </>
    );
};
export default TripForm;
