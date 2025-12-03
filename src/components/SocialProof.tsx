import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const SocialProof = () => {
  const customers = [
    { name: "Hanwha", logo: "/hanwha logo.png" },
    { name: "Hyundai Motor Manufacturing Alabama", logo: "/hmma logo.png" },
    { name: "SK", logo: "/sk logo.png" },
    { name: "Syeonewha", logo: "/syeonewha logo.png" },
  ];

  return (
    <section className="py-10 px-8 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-medium mb-10">
          Trusted by leading global enterprises
        </p>

        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <Carousel
            opts={{
              loop: true,
              align: "start",
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-8 items-center">
              {customers.map((customer, i) => (
                <CarouselItem key={i} className="pl-8 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div
                    className="flex flex-col items-center justify-center gap-4 group select-none"
                  >
                    <div className="h-16 w-full flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      <img 
                        src={customer.logo} 
                        alt={`${customer.name} logo`}
                        className="max-h-full max-w-[160px] object-contain"
                      />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300 text-center px-2">
                      {customer.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
