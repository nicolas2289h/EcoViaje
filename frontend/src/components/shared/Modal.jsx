const Modal = ({ isModalOpen, closeModal }) => {
    return (
        <>
            {isModalOpen && (
                <dialog open className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Filtros Avanzados</h3>
                        <p className="py-4">Seleccione</p>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Guardar</button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    )
}
export default Modal