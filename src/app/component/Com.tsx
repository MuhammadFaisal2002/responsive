import Image from "next/image";
export default function Com(){
    return(
        <>
        <div className="flex flex-wrap gap-4 justify-center">
      {/* Image 1 */}
      <div className=" relative w-1/2 sm:w-1/3 md:w-1/4 h-60 sm:h-80 md:h-96">
        <Image
          src="/1.jpeg"
          alt="Image 1"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-1/2 sm:w-1/3 md:w-1/4 h-60 sm:h-80 md:h-96">
        <Image
          src="/2.jpeg"
          alt="Image 2"
          fill
          className="object-cover rounded-md"
        /> 
      </div>

      {/* Image 3 */}
      <div className="relative w-1/2 sm:w-1/3 md:w-1/4 h-60 sm:h-80 md:h-96">
        <Image
          src="/3.jpg"
          alt="Image 3"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="relative w-1/2 sm:w-1/3 md:w-1/4 h-60 sm:h-80 md:h-96 ">
        <Image
          src="/3.jpg"
          alt="Image 3"
          fill
          className="object-cover rounded-md"
        />
      </div>
    </div>
        </>
    )
}