import Image from "next/image";
import Card from "./components/Card";
import { Button } from "./components/ui/Button";
import Carouselx from "./components/carousel";

export default function Home() {
  return (
    <>
      <section className="lg:h-[80vh] md:h-[80vh] h-[500px] overflow-hidden">

        <div className="flex absolute  flex-col gap-5 justify-end pb-20 bg-black/50 items-start w-full lg:h-[80vh] md:h-[80vh] h-[500px] z-10  text-white">
       
          <div className="grid w-[70vw] mx-auto">
            <div className="text-[42px] font-bold">We&apos;ll take you anywhere.</div>
            <div className="text-lg">With us Travel, you&apos;re settled. Never worry about a thing.</div>
          </div>
          <div className="w-[70vw] mx-auto"><Button className="bg-yellow-500 hover:bg-yellow-600 p-5">Get in touch</Button></div>
        </div>
        <img src="/images/phiphi.webp" className="w-full h-full object-cover relative -z-10 " alt="Phi phi Island" />


      </section>


      <section className="w-[80vw] mx-auto py-10 flex gap-10 ">
        <div className="text-[42px] font-bold basis-1/3">Explore Place</div>
        <div className="basis-2/3 w-2/3">
          <Carouselx  items={[1, 2, 3, 4, 5].map(item => 
          <Card key={item} imgURL="/images/phiphi.webp"></Card>)}/>
          </div>
      </section>

      <section className="w-[80vw] mx-auto py-10 flex  gap-10 ">
        <div className="text-[42px] font-bold basis-1/3">Explore Accommodation </div>
        <div className="basis-2/3 w-2/3">
          <Carouselx  items={[1, 2, 3, 4, 5].map(item => 
          <Card key={item} imgURL="https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg"></Card>)}/>
          </div>
      </section>


      <section className="bg-zinc-100">
        <div className="w-[80vw] mx-auto py-10">
          <div className="text-3xl font-bold">What people say about us</div>

          <div className="grid lg:grid-cols-2 grid-cols-1">
            
            {[1,2].map(items =><div className="py-10 grid gap-5">
              <div className="">
                &quot; I had many issues in the past with other travel agencies that ruined our trips. Travelling with Hevor puts my mind at ease. &quot;
              </div>
              <div className="flex gap-5 items-center">
                <div className="rounded-full bg-black h-12 w-12"></div>
                <div className="text-sm">Mickie P.</div>
              </div>
            </div>)}
          </div>
        </div>
      </section>


      <section className="lg:h-[80vh] md:h-[80vh] h-[500px] overflow-hidden">

        <div className="flex absolute px-10 gap-5 bg-black/80 flex-col justify-center items-start w-full lg:h-[80vh] md:h-[80vh] h-[500px] z-10  text-white">
          <div className="text-[42px] font-bold">Get travelling, get away. Easily.</div>
          <Button className="bg-yellow-500 hover:bg-yellow-600  p-6">Get Away</Button>
        </div>
        <img src="/images/phiphi.webp" className="w-full h-full object-cover relative -z-10 " alt="Phi phi Island" />


      </section>
    </>
  );
}
