import { useRouter } from "next/router"
import { BsTwitter } from "react-icons/bs";

const SideBarLogo = () => {

    const router = useRouter();

    return (
        <div className='rounded-full w-min  p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition duration-200' onClick={() => router.push('/')}>
            <BsTwitter className='text-white' size={28}/>
        </div>
    )
}

export default SideBarLogo