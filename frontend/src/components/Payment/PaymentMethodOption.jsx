const PaymentMethodOption = ({ item, handleChange, paymentMethod }) => {
    return (
        <label className="cursor-pointer label py-4 px-5 border border-gray-700">
            <span className="label-text">{item}</span>
            <input
                name="paymentMethod"
                value={item}
                onChange={handleChange}
                type="radio"
                checked={paymentMethod === item}
                className="radio radio-accent"
            />
        </label>
    )
}
export default PaymentMethodOption