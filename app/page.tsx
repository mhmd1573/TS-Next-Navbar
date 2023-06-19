import Image from 'next/image'
import { Inter } from 'next/font/google'

import {Navbar,Content} from '../Components/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      
        <Navbar />
        <Content />
        
      </>

    )
}
