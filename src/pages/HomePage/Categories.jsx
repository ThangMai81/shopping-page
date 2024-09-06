import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  function handleNavigateShopPage() {
    navigate("shop");
  }
  const hoverEff = "hover:cursor-pointer hover:opacity-70 transition-opacity";
  return (
    <div className="mt-[40px]">
      <div className="grid grid-rows-2 justify-center">
        <span className="uppercase justify-self-center text-xs text-neutral-400 italic content-end">
          Carefully created Collections
        </span>
        <h1 className="uppercase justify-self-center italic text-xl">
          Browse our categories
        </h1>
      </div>
      {/* List of image */}
      <div>
        <div className="grid grid-cols-2 mb-[20px] gap-[20px]">
          <img
            src="../../public/product_1.png"
            onClick={handleNavigateShopPage}
            className={hoverEff}
          />
          <img
            src="../../public/product_2.png"
            onClick={handleNavigateShopPage}
            className={hoverEff}
          />
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
          <img
            src="../../public/product_3.png"
            onClick={handleNavigateShopPage}
            className={hoverEff}
          />
          <img
            src="../../public/product_4.png"
            onClick={handleNavigateShopPage}
            className={hoverEff}
          />
          <img
            src="../../public/product_5.png"
            onClick={handleNavigateShopPage}
            className={hoverEff}
          />
        </div>
      </div>
    </div>
  );
}
