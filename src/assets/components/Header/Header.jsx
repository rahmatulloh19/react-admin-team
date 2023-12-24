import search from "../../images/Ellipse.svg";
import note from "../../images/new.svg";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mb-14">
        <strong className="font-bold text-2xl">Overview</strong>
        <div className="flex items-center justify-center">
          <form className="flex items-center justify-center mr-8 gap-6">
            <label className="flex items-center gap-3">
              <input
                className="hidden px-2 border rounded-xl w-52 "
                type="search"
              />
              <span>
                <img src={search} alt="search" width={16} height={16} />
              </span>
            </label>
            <button type="button">
              <img src={note} alt="note" width={16} height={16} />
            </button>
          </form>

          <span className="pl-8 mr-3 border-l-2  border-gray-200 text-sm font-semibold tracking-widest .leading-5 text-gray-800">
            Jonas Ferdinand
          </span>
          <img
            className="rounded-full"
            src="https://picsum.photos/44/44"
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
