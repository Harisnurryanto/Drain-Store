import Carousel from "../Elements/Corousel";
import MainBody from "../Elements/Main-Body";
import image1 from "/gosha.jpg";
import image2 from "/bjorkk.jpg";
import image3 from "/bjork2.jpg";

const ContentAbout = () => {
  const mySlides = [
    { id: 1, imageUrl: image1, altText: "Slide 1" },
    { id: 2, imageUrl: image2, altText: "Slide 2" },
    { id: 3, imageUrl: image3, altText: "Slide 3" },
  ];
  return (
    <div>
      <div>
        <MainBody>
          <Carousel
            slides={mySlides}
            autoplayInterval={4000}
            showControls={true}
          />
          <div className="w-auto bg-blue-200 mx-auto my-4 p-4 ">
            <h1 className="text-4xl font-bold mb-4">Heading 1</h1>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </MainBody>
      </div>
    </div>
  );
};

export default ContentAbout;
