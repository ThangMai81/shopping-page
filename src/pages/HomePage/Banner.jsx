import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="relative">
      <img src="./banner1.jpg" className="h-[400px]" />
      <div className="absolute left-[50px] top-[30%]">
        <span className="text-neutral-400 italic uppercase text-xs">
          New Inspiration 2020
        </span>
        <h1 className="text-3xl max-w-[350px] italic mb-[10px]">
          20% OFF ON NEW SEASON
        </h1>
        <Link
          to="shop"
          className="bg-neutral-800 font-thin text-white italic px-[10px] py-[5px]"
        >
          Browse collections
        </Link>
      </div>
    </div>
  );
}
