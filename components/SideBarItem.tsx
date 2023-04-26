
import { itemsProps } from './SideBar';

interface SideBarItemProps extends itemsProps {
    onClick?: () => void,
}


const SideBarItem: React.FC<SideBarItemProps> = ({ label, href, icon: Icon, onClick }) => {
    return (
        <div className='flex flex-row items-center'>
            <div
                className='relative rounded-full p-4  flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition duration-200
                lg:hidden
            '
            >
                <Icon className='text-white' size={18} />
            </div>
            <div className='relative p-4 hidden lg:flex items-center gap-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 w-full cursor-pointer duration-300'>
                <Icon className='text-white' size={24} />
                <p className='text-white text-xl' >{label}</p>
            </div>

        </div>
    )
}

export default SideBarItem