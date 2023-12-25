import clsx from "clsx";

function TrendItems({ isLast, title, text }) {
  return (
    <li
      className={`py-6 ${clsx({
        "border-b": !isLast,
      })} border-borderColor`}
    >
      <h4 className="font-semibold text-secondaryTextColor mb-1.5 leading-[22px] tracking-[0.3px]">
        {title}
      </h4>
      <strong className="text-mainTextColor text-2xl tracking-[0.3px]">
        {text}
      </strong>
    </li>
  );
}

export default TrendItems;
