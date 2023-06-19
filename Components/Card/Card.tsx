import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  imageUrl: any;
  date: string;
  link: string;
}

export default function Card({ title, imageUrl, date, link }: CardProps) {
  return (
    <Link href={link}>
      <div className="p-5 max-w-sm rounded-2xl flex flex-col items-center cursor-pointer">
        <div className="hover:text-blue-400">
          <Image
            src={imageUrl}
            alt="Picture of the author"
            width={300}
            height={300}
            className="bg-gray-200 p-3 rounded-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          />

          <div className="mt-8 hover:bg-transparent">
            <h5 className="font-semibold text-xl">{title}</h5>
          </div>

          <p className="mt-2 text-gray-600">{date}</p>
        </div>
      </div>
    </Link>
  );
}
