import ParallaxImageC from "@/components/ParallaxImage";

export function HeroSection() {
  return (
    // <section className="min-h-screen w-full relative overflow-hidden">
    //   <div className="w-full h-dvh">
    //     <ParallaxImageC src="/book.jpeg" alt="heko" speed={0.08} scale={1.2} />
    //   </div>
    // </section>
    <>
      <section className="relative p-4 w-full">
        <div className="h-[50vh] md:h-[80dvh] max-w-[400px] mx-auto w-full rounded-2xl overflow-hidden shadow-2xl">
          <ParallaxImageC
            src="/Test/4.jpeg"
            alt="bluer"
            scale={1.2}
            // speed={0.3}
          />
        </div>
      </section>
    </>
  );
}
