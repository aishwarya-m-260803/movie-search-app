
import Image from "next/image";

export default function Home(){
  return(
    
    <div className="relative">
      
      <Image
        src="/images/hero.jpg"
        alt="Movies Banner"
        width={1200}
        height={400}
        className="w-full h-72 object-cover rounded-xl"
      />
      
      <p className="mt-4 text-lg text-gray-700">Discover the latest movies, read reviews, 
        and choose the best movie for you.</p>
    </div>
  )
}