import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

const Sliders = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (timeoutRef.current !== null) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full flex items-center justify-center px-4 sm:px-6 md:px-8"
          >
            <div className="relative group rounded-xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Hover overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/60 transition duration-300 rounded-xl">
                <p className="opacity-0 group-hover:opacity-100 text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 text-center transition duration-300">
                  Your next blast starts with us ✨
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition z-10"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition z-10"
      >
        <ChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
