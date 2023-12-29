import { CardItems } from "../../../constants";
import CardItem from "../CardItem/CardItem";
function CardHeader() {
  return (
    <section>
      <ul className="flex items-center justify-between gap-8">
        {CardItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
}

export default CardHeader;
