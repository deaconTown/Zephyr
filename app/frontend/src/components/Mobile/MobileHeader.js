import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo-lg.png'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import LoginModal from '../login_modal';

function MobileHeader(){
    const [isActive,setActive] = useState(false)
    const [isModalOpen,setModal] = useState(false)
    const [ selectedView, setView ] = useState("")

    const handleModalClose = () => {
        setModal(false)
    }
    return(
        <div className="[ header ][ bg-secondary ][ h-[100px] ][ flex flex-row ][ px-[20px] ][ justify-between ][ phone:visible md:hidden ]">
            <img src={logo} className="[ scale-[1.5] ][ ml-[20px] ]" alt="Zephyr Logo" />
            <FontAwesomeIcon onClick={()=>{setActive(!isActive)}} className="[ w-[30px] h-[30px] ][ my-auto ]" icon={faBars} style={{color: "#62a87c",}} />
            <div class={`w-[200px] absolute right-3 z-[1] top-[65px]  ${isActive ? 'md:block': 'hidden'}`} id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>{setActive(!isActive); setModal(true); setView("login") }} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                    </li>
                    {
                        isModalOpen && < LoginModal isModalOpen={isModalOpen} initialView={selectedView} onClose={handleModalClose} />
                    }
                </ul>
            </div>
        </div>
    );
}

export default MobileHeader;

