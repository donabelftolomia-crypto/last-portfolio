import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

type EmblaOptionsType = any;
type EmblaPluginType = any;

const CarouselContext = React.createContext<{
  embla?: { scrollPrev?: () => void; scrollNext?: () => void } | null;
}>({ embla: null });

type CarouselProps = React.ComponentPropsWithoutRef<"div"> & {
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, opts, plugins, children, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins);

    return (
      <CarouselContext.Provider value={{ embla: emblaApi ?? null }}>
        <div ref={(node) => {
          emblaRef(node);
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }} className={cn("overflow-hidden", className)} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-4", className)} {...props}>
      {children}
    </div>
  ),
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex-shrink-0", className)} {...props}>
      {children}
    </div>
  ),
);
CarouselItem.displayName = "CarouselItem";

const CarouselButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button"> & { direction: "prev" | "next" }>(
  ({ className, direction, ...props }, ref) => {
    const { embla } = React.useContext(CarouselContext);
    const handleClick = () => {
      if (!embla) return;
      if (direction === "prev") {
        embla.scrollPrev?.();
      } else {
        embla.scrollNext?.();
      }
    };

    return (
      <button
        type="button"
        ref={ref}
        onClick={handleClick}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full border bg-background/80 text-foreground shadow-sm transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselButton.displayName = "CarouselButton";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(
  (props, ref) => <CarouselButton ref={ref} direction="prev" {...props} />,
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(
  (props, ref) => <CarouselButton ref={ref} direction="next" {...props} />,
);
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };
