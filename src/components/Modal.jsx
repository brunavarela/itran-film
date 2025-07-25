import { FiX } from "react-icons/fi";
import Logo from '../assets/Logo-menu.png';

const Modal = ({ onClose }) => {
  return (
    <>
        <div className="fixed inset-0 bg-black opacity-[97%] z-40 p-8 flex flex-col justify-center">
            <div className="w-full pb-[100px] rounded-lg max-w-md">
                <nav className="uppercase flex flex-col gap-8 text-white mt-4">
                    <a className="pb-8 border-b-1 border-[#323232]" href="/">Home</a>
                    <a className="pb-8 border-b-1 border-[#323232]" href="/about">Sobre</a>
                    <a className="pb-8 border-b-1 border-[#323232]" href="/portfolio">Portfolio</a>
                    <a className="pb-8 border-b-1 border-[#323232]" href="/contact">Contato</a>
                </nav>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <img
                    src={Logo}
                    alt="Logo iTran"
                    className="w-[88px] h-auto object-contain"
                />
                <div className="flex flex-col text-[10px] text-center text-[#929292]">
                    <p>
                        ©2025 Oxys.
                    </p>
                    <p>
                        Todos os direitos reservados. 
                    </p>
                </div>
            </div>
        </div>
        <div className="fixed flex justify-end bottom-0 p-6 lg:p-9 w-full bg-black border-t-1 border-white z-50">
            <button
                className="md:hidden text-2xl text-white"
                onClick={onClose}
            > 
                <FiX />
            </button>
        </div>
    </>
  )
}

export default Modal;
