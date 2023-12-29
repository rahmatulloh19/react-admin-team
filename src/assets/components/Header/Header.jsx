import { IoIosNotificationsOutline } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import avatar from "../../images/avatar.png";
function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mb-14">
        <h2 className="font-bold text-2xl">Overview</h2>
        <div className="flex items-center justify-center">
          <form className="flex items-center justify-center mr-8 gap-6">
            <label className="flex items-center gap-3">
              <input
                className="hidden px-2 border rounded-xl w-52 "
                type="search"
              />
              <span>
                <GoSearch className="w-5 h-5 opacity-70 hover:opacity-100" />
              </span>
            </label>
            <button type="button">
              <IoIosNotificationsOutline className="w-5 h-5 hover:opacity-75" />
            </button>
          </form>

          <span className="pl-8 mr-3 border-l-2  border-gray-200 text-sm font-semibold tracking-widest .leading-5 text-gray-800 hover:opacity-75">
            Jonas Ferdinand
          </span>
          <img
            className="rounded-full hover:opacity-80"
            src={avatar}
            alt="user picture"
            width={44}
            height={44}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
