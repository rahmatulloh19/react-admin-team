import { task_items, ticket_items } from "../../../constants";
import TicketItem from "../TicketItem/TicketItem";
import TaskItem from "../TaskItem/TaskItem";

function Details() {
  return (
    <section className="details pt-[30px]">
      <div className="details__inner flex gap-x-[30px]">
        <h2 className="details__title visually-hidden">
          You can find detail description
        </h2>
        <div className="details__ticket border rounded-lg bg-white grow">
          <div className="details__ticket-inner mb-2 flex justify-between pt-8 px-8">
            <h3 className="details__ticket-title text-mainTextColor text-[19px] font-bold tracking-[0.4px] leading-6">
              Unresolved tickets
            </h3>
            <a
              className="text-linkColor text-sm tracking-[0.2px] font-semibold"
              href="#"
            >
              View details
            </a>
          </div>
          <p className="text-[#4b506d] mb-4 ml-8 text-xs">
            <mark className="text-secondaryTextColor bg-transparent">
              Group:{" "}
            </mark>
            Support
          </p>
          <ul>
            {ticket_items.map((item, index) => {
              return <TicketItem {...item} key={index} />;
            })}
          </ul>
        </div>
        <div className="details__task border rounded-lg bg-white grow">
          <div className="details__ticket-inner mb-2 flex justify-between pt-8 px-8">
            <h3 className="details__ticket-title text-mainTextColor text-[19px] font-bold tracking-[0.4px] leading-6">
              Tasks
            </h3>
            <a
              className="text-linkColor text-sm tracking-[0.2px] font-semibold"
              href="#"
            >
              View all
            </a>
          </div>
          <p className="text-secondaryTextColor mb-4 ml-8 text-xs">Today</p>
          <form className="flex justify-between px-8 border-b border-borderColor py-[17px]">
            <input
              className="outline-none"
              type="text"
              placeholder="Create new task"
            />
            <button className="w-6 h-6" type="submit"></button>
          </form>
          <ul>
            {task_items.map((item, index) => {
              return <TaskItem {...item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Details;
