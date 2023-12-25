import clsx from "clsx";

function TaskItem({ title, type, isLast, isCompleted }) {
  return (
    <li className={`py-[17px] px-8 ${clsx({ "border-b": !isLast })}`}>
      <div className="details__task-inner flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          {isCompleted ? (
            <input
              type="checkbox"
              defaultChecked="true"
              className="checkbox checkbox-sm checkbox-primary rounded-full border-borderColor border-2"
            />
          ) : (
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary rounded-full border-borderColor border-2"
            />
          )}
          <h4 className="text-mainTextColor text-sm">{title}</h4>
        </div>
        <span
          className={`py-[5px] px-3 text-white text-[11px] leading-[14px] rounded-lg font-bold tracking-[0.5px] hover:cursor-pointer ${clsx(
            {
              urgent: type == "Urgent",
              new: type == "New",
              default: type == "Default",
            },
          )}`}
        >
          {type.toUpperCase()}
        </span>
      </div>
    </li>
  );
}

export default TaskItem;
