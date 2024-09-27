const DriverCancellationPolicy = () => {
    return (
        <div className="w-[400px] flex flex-col text-start gap-1 border-gray-700 border p-4 rounded-md">
            <div className="flex justify-between items-center">
                <p className="font-bold">Política de cancelación</p>
                <span className="underline cursor-pointer">Más Información</span>
            </div>
            <p>Si cancelas el viaje hasta 6 horas antes recibirás un reembolso parcial.</p>
        </div>
    )
}
export default DriverCancellationPolicy