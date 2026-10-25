import { SportShoe, Shirt, Footprints, Package } from "lucide-react";

export default function ListGroup({ item }) {
  const Icons = { SportShoe, Shirt, Footprints, Package };
  const Icon = Icons[item?.iconName] || Package;
  return (
    <section className="flex items-center px-5 py-1">
      <span aria-hidden="true" className="pr-4">
        <Icon className="text-text-main-light dark:text-text-main-dark w-5 h-5" />
      </span>

      <div>
        <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
          {item.productName}
        </h3>
        <div className="text-sm font-light text-text-sub-light dark:text-text-sub-dark">
          <span> {item.sku} </span>
          <span> {item.size} </span>
          <span> / </span>
          <span>{item.color}</span>
        </div>
      </div>

      <div className="ml-auto text-right text-sm font-light text-text-sub-light dark:text-text-sub-dark">
        <p className="text-right font-bold text-brand-primary">{item.left}</p>
        <p>Unit Left</p>
      </div>
    </section>
  );
}
