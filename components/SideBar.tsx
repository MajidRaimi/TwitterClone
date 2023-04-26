import { IconType } from 'react-icons';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import { SideBarItem, SideBarLogo, SideBarTweetButton } from './';

export interface itemsProps {
    label: string;
    href?: string,
    icon: IconType;
}


const SideBar = () => {

    const items: itemsProps[] = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill,
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill,
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser,
        },
    ]

    return (
        <div className='col-span-1  '>
            <div className='flex flex-col items-center '>
                <div className=' lg:w-[230px]]'>
                    <SideBarLogo />
                    {
                        items.map((item, index) => (
                            <SideBarItem key={index} {...item} />
                        ))
                    }
                    <SideBarItem onClick={() => { }} icon={BiLogOut} label='Logout' />
                    <SideBarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default SideBar