import { gwendolyn, roboto, cardo } from "@/utils/fonts";

const Hero = () => {
  return (
    <div className={`${cardo.className} text-center`}>
      <span className="text-base">A marriage Ceremony</span>
      <h1 className="text-5xl">Best Life Partner</h1>
      <button className="text-xxs border border-solid border-black bg-white px-4 py-2 uppercase">
        Read More
      </button>
    </div>
  );
};

export default Hero;
