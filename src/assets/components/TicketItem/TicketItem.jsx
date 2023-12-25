import clsx from "clsx";

function TicketItem({ title, count, isLast }) {
  return (
    <li
      className={`border-borderColor ${clsx({
        "border-b": !isLast,
      })}`}
    >
      <div className="details__ticket-item flex justify-between pt-5 px-8 pb-[18px]">
        <h4 className="font-semibold text-sm tracking-[0.2px] text-mainTextColor">
          {title}
        </h4>
        <span className="font-semibold text-sm tracking-[0.2px] text-secondaryTextColor">
          {count}
        </span>
      </div>
    </li>
  );
}

export default TicketItem;
