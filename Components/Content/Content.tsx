
import Card from "../Card/Card" 
import img1 from '../../public/assets/image/card1.webp';


export default function Content() {
    return (
        <>
            <div className="content  pt-31" >

                    <div className="container mx-auto ">

                        <h1 className="text-5xl font-semibold">Crypto News</h1>
                        
                        <div className="bg-gray-100 my-10 p-5 rounded-lg">
                            <h3 className="font-bold">The Milk Road Promise</h3>
                            <p>Were committed to helping you get smart about crypto. Some articles feature products from partners who compensate us, but opinions are always our own.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
                            <Card imageUrl={img1} title='🥛 Is crypto moving into the White House? 🇺🇸' date='June 16, 2023 - 4 Min Read' link='/News' />
                            <Card imageUrl={img1} title='🥛 TBT: 3 lessons from the Celsius crash💥' date='June 15, 2023 - 3 Min Read ' link='/News'/>
                            <Card imageUrl={img1} title='🥛 The State of Crypto: Regulation Edition 🚨' date='June 14, 2023 - 4 Min Read' link='/News'/>
                            <Card imageUrl={img1} title='🥛 3 reasons ETH could fail...' date='June 13, 2023 - 5 Min Read' link='/News'/>
                            <Card imageUrl={img1} title='🥛 Weekend Market Movers: 1 big winner 📊' date='June 12, 2023 - 3 Min Read' link='/News'/>
                            <Card imageUrl={img1} title='🥛NFT Saturday Round Up 🎁' date='June 10, 2023 - 4 Min Read' link='/News'/>
                                </div>

                    

        
                    </div>

               </div>

            
        </>
    
        )
    }