import { useRouter } from "next/router"
import { FaFeather } from 'react-icons/fa';

const SideBarTweetButton = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/compose/tweet')} className='flex flex-row items-center justify-center '>
            <div className='mt-6 lg:hidden bg-sky-500 rounded-full h-14 w-14 flex p-4 justify-center items-center bg-sky-blue cursor-pointer transition hover:bg-opacity-10'>
                <FaFeather className='text-white ' />
            </div>
            <div className='mt-6 hidden  bg-sky-500 rounded-full  h-14 w-full lg:flex p-4 justify-around items-center bg-sky-blue cursor-pointer transition hover:bg-opacity-10 '>
                <FaFeather className='text-white ' />
                <p>Tweet</p>
            </div>
        </div>
    )
}

export default SideBarTweetButton