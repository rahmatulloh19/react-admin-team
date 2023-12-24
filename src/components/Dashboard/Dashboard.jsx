import logo from "../../assests/logo.svg";
import overview from "../../assests/overview.svg";
import tickets from "../../assests/tickets.svg";
import ideas from "../../assests/ideas.svg";
import contact from "../../assests/contacts.svg";
import agent from "../../assests/agents.svg";
import articles from "../../assests/articles.svg";
import setting from "../../assests/settings.svg";
import sub from "../../assests/subscription.svg";

function Dashboard() {
  return (
    <div className="w-2/12 h-screen bg-zinc-800 pt-8">
      <a href="#" className="flex gap-3 items-center justify-start  mb-14 pl-8">
        <img src={logo} alt={logo} width={32} height={32} />
        <span className="text-gray-400 text-opacity-70 font-bold">
          Dashboard Kit
        </span>
      </a>
      <ul className="">
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={overview} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Overview
          </span>
        </li>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={tickets} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Tickets
          </span>
        </li>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={ideas} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Ideas
          </span>
        </li>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={contact} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Contacts
          </span>
        </li>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={agent} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Agents
          </span>
        </li>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={articles} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Articles
          </span>
        </li>
      </ul>
      <hr className="mt-4 mb-4 opacity-65 bg-gray-200" />
      <ul>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={setting} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Settings
          </span>
        </li>
        <li className="group flex item-center gap-6 pl-8 pt-4 pb-4 bg-opacity-100 border-l border-transparent hover:bg-gray-400 hover:bg-opacity-5 hover:border-l hover:border-gray-50 ">
          <img src={sub} width={16} height={16} />
          <span className="text-gray-500 tracking-widest text-base group-hover:text-gray-200">
            Subscription
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
