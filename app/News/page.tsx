
import { Navbar } from "@/Components"
import Image from 'next/image'
import news1 from '../../public/assets/image/news1.webp'
import news2 from '../../public/assets/image/news2.webp'



export default function page() {
    return (
        <>
    <Navbar />

            <div className=" container mx-auto  sm:w-full md:w-1/2 xs:w-full ">
                <h1 className="xs:font-semibold text-2xl sm:font-semibold text-5xl  ">🥛 Is crypto moving into the White House? 🇺🇸</h1>
                <h3 className="mt-5 font-bold">Writer Milk Man</h3>
                <p>June 16, 2023 . 4 Min Read</p>

                <Image src={news1} alt="Picture of the author" width={500} height={400} className="mx-auto" />

                <h1 className="font-semibold text-l mb-10">Today’s edition is brought to you by Origin Story - they just launched a trading campaign partnered with 0N1 Force. Up for grabs: unforgettable IRL experiences, exclusive NFTs, and more 🎁</h1>    

                <Image src={news2} alt="Picture of the author" width={500} height={400} className="mb-20 mx-auto" />

            </div>


            </>
    )
}