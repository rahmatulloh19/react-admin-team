/* eslint-disable react/prop-types */
function CardItem(props) {
  return (
    <li className="group w-64 py-6 px-6 flex flex-col items-center justify-center border-2 rounded-lg hover:border-blue-600  bg-white transition-border duration-500">
      <span className="font-bold text-lg tracking-widest mb-3 text-gray-400 group-hover:text-blue-600 transition-color duration-500">
        {props.statusName}
      </span>
      <strong className="group text-4xl font-bold -tracking-tighter group-hover:text-blue-600 transition-color duration-500">
        {props.countNumber}
      </strong>
    </li>
  );
}

export default CardItem;
