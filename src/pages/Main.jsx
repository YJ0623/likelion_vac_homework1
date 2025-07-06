import itemData from "../data/items.json";
import ItemCards from "../components/ItemCards";

export const Main=()=>{
  return (
    <section className="dt:px-20 ph:px-5 mb-20">
      <div className="font-inter font-bold text-[26px] leading-[36px] mt-4">
        Welcome to ShopMall</div>

      <div className="font-inter text-[14px] leading-[24px]">Discover our latest products and deals</div>

      <div className="flex items-center justify-between mt-3 mb-3">
        <div className="font-inter text-[20px] leading-[32px] font-semibold">Featured Products</div>
        <div className="text-[#4f46E5] cursor-pointer">View All</div>
      </div>

      <main className="grid grid-cols-2 dt:grid-cols-4 gap-[20px]">
      {itemData.map((item,id) => (
        <ItemCards key={id} item={item}/>
      ))}
      </main>

    </section>
  


  );
}
export default Main;