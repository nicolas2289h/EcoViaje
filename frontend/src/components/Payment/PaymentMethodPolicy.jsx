import { LockClosedIcon } from "@heroicons/react/24/solid"

const PaymentMethodPolicy = () => {
    return (
        <div className="flex items-start mb-4">
            <LockClosedIcon className="h-4 text-primary mx-2 mt-[2px]" />
            <div className="text-xs text-start">
                <p>Tu pago se realiza de forma completamente segura.</p>
                <p>Al hacer esta compra, aceptas los <span className="font-bold cursor-pointer underline text-xs">Términos y Condiciones</span>.</p>
            </div>
        </div>
    )
}
export default PaymentMethodPolicy