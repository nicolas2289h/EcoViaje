import { StarIcon } from '@heroicons/react/24/solid';

const DriverRating = ({ driver }) => {
    const { name, details } = driver

    return (
        <div className='w-[400px] flex gap-3 border-gray-700 border p-4 rounded-md'>
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <div className='flex items-center'>
                <p className=' me-2'>{name}</p>
                <StarIcon className="h-4 text-yellow-200 mx-1" />
                <p> {details.rating}</p>
                <span className='italic ms-2'>(Conductor)</span>
            </div>
        </div>
    )
}
export default DriverRating