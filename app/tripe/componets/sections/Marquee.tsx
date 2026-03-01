export default function CurvedMarquee() {
  return (
    <section className="flex min-h-screen items-center bg-gray-50 overflow-hidden">
      <div className="relative w-full">
        {/* Top Curved Mask */}
        <div className="absolute -inset-x-1 top-[-25.5%] z-10 h-1/2 scale-x-125 scale-y-75 rounded-[100%] bg-white 2xl:scale-y-95 pointer-events-none"></div>

        {/* Bottom Curved Mask */}
        <div className="absolute -inset-x-1 bottom-[-25.5%] z-10 h-1/2 scale-x-125 scale-y-75 rounded-[100%] bg-white 2xl:scale-y-95 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex marquee-10 sm:marquee-15 xl:marquee-30 w-max">
          {/* First Set */}
          <div className="grid h-96 w-[350vw] grid-cols-12 gap-1 sm:h-[40rem] sm:w-[300vw] lg:w-[200vw] 2xl:h-[60rem]">
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-one.webp"
              alt="Showcase 1"
            />
            <img
              className="col-span-2 h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-six.webp"
              alt="Showcase 6"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-two.webp"
              alt="Showcase 2"
            />
            <img
              className="h-full w-full object-cover object-top"
              src="https://tlfolio.netlify.app/images/me/show-four.webp"
              alt="Showcase 4"
            />
            <img
              className="col-span-2 h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-seven.webp"
              alt="Showcase 7"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-five.webp"
              alt="Showcase 5"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-six.webp"
              alt="Showcase 6 repeated"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-nine.webp"
              alt="Showcase 9"
            />
            <img
              className="col-span-2 h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-thirteen.webp"
              alt="Showcase 13"
            />
          </div>

          {/* Second Set (Duplicated for seamless looping) */}
          <div className="grid h-96 w-[350vw] grid-cols-12 gap-1 sm:h-[40rem] sm:w-[300vw] lg:w-[200vw] 2xl:h-[60rem]">
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-one.webp"
              alt="Showcase 1"
            />
            <img
              className="col-span-2 h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-six.webp"
              alt="Showcase 6"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-two.webp"
              alt="Showcase 2"
            />
            <img
              className="h-full w-full object-cover object-top"
              src="https://tlfolio.netlify.app/images/me/show-four.webp"
              alt="Showcase 4"
            />
            <img
              className="col-span-2 h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-seven.webp"
              alt="Showcase 7"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-five.webp"
              alt="Showcase 5"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-six.webp"
              alt="Showcase 6 repeated"
            />
            <img
              className="h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-nine.webp"
              alt="Showcase 9"
            />
            <img
              className="col-span-2 h-full w-full object-cover"
              src="https://tlfolio.netlify.app/images/me/show-thirteen.webp"
              alt="Showcase 13"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
