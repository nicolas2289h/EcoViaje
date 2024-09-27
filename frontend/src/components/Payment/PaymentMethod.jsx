import { useState } from "react"
import PaymentMethodOption from "./PaymentMethodOption"
import PaymentMethodPolicy from "./PaymentMethodPolicy"

const PaymentMethod = () => {
    const paymentMethodsList = ['Mercado Pago', 'Tarjeta de débito/crédito', 'Transferencia bancaria', 'Acordar con el conductor']
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodsList[0])

    const handleChange = (e) => {
        setPaymentMethod(e.target.value)
    }

    return (
        <div className='w-[400px] border-gray-700 border p-3 rounded-md'>
            <p className="font-bold mb-3">Seleccioná tu método de pago</p>

            <div className="form-control">
                {
                    paymentMethodsList.map(item => (
                        <PaymentMethodOption key={item} item={item} handleChange={handleChange} paymentMethod={paymentMethod} />
                    ))
                }

                <div className="w-full my-4 bg-gray-700 mx-auto h-1"></div>

                <PaymentMethodPolicy />

                <button className="btn btn-primary text-white">Pagar $16000</button>
            </div>
        </div>
    )
}
export default PaymentMethod