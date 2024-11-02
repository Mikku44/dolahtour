import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"


export default function Carouselx({ items,className }: any) {
  return <Carousel className={`w-full ${className}` }>
    <CarouselContent >
      {items.map((item: any, index: number) => <CarouselItem className="basis-auto" key={index}>{item}</CarouselItem>)}

    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>

}