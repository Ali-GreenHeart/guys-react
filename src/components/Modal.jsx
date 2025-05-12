import { useEffect, useState } from "react"

const Modal = ({ }) => {
    // state-lerin teyin edilmesi!
    const [isOpen, setIsOpen] = useState(false)

    // biznes mentiq dasiyan funksiyalarin yazilmasi
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    useEffect(() => {
        console.log("Modal componenti yarandi");
        return () => {
            console.log('RIP!')
            // bu funksiya ancaq unmount halinda isleyir!
            // cleanup function -> addEventListener -> remove etmek! GC
        }
    }, [])
    useEffect(() => {
        console.log('modal acilib ve ya baglandi, indiki hali: ', isOpen ? ' aciq ' : " bagli ")
    }, [isOpen])

    // JSX kodlarinin return edilmesi)
    return (
        <>
            <button onClick={handleOpen}>open modal</button>
            {
                // short circuit 
                isOpen && <p style={{ background: 'red' }}> Modal
                    <button onClick={handleClose}>close modal</button>
                </p>
            }
        </>
    )
}
export default Modal

/*


Modal -> isOpen, setIsOpen
button[open], button [x] -> baglansin
*/
