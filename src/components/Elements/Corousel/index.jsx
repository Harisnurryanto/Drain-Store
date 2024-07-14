import { useState, useEffect } from "react";

const Carousel = ({ slides, autoplayInterval, showControls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    return () => clearInterval(timerId);
  }, [currentIndex, autoplayInterval, handleNext]);

  return (
    <div className="relative overflow-hidden h-72 rounded-lg shadow-lg">
      <div className="carousel-inner flex w-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={
              slide === slides[currentIndex]
                ? "block w-full absolute top-0 left-0 transition duration-500 ease-in-out"
                : "hidden absolute top-0 left-0 w-full transition duration-500 ease-in-out"
            }
          >
            <img
              src={slide.imageUrl}
              alt={slide.altText}
              className="w-full h-full object-cover ransition duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
      {showControls && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 w-40 h-64 focus:outline-none"
          ></button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 w-40 h-64 focus:outline-none"
          ></button>
        </>
      )}
    </div>
  );
};

export default Carousel;
