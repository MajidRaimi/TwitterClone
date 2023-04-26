import { useRouter } from "next/router"
import { FaFeather } from 'react-icons/fa';

const SideBarTweetButton = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/compose/tweet')} className='flex flex-row items-center justify-center'>
            <div className='mt-6 lg:hidden rounded-full h-14 w-14 flex p-4 justify-center items-center bg-sky-blue cursor-pointer transition hover:bg-opacity-10'>
                <FaFeather />
            </div>
        </div>
    )
}

export default SideBarTweetButton