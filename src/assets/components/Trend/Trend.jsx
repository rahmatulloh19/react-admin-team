import { trend_items } from "../../../constants";
import TrendItems from "../TrendItem/TrendItem";
import img from "../../images/trendImg.png";

function Trend() {
  return (
    <section className="trend pt-[30px]">
      <div className="trend__inner flex bg-white rounded-lg border border-borderColor">
        <div className="trend__graphic p-8">
          <h3 className="text-[19px] tracking-[4px] font-bold mb-2 text-mainTextColor">
            Today’s trends
          </h3>
          <div className="trend__data flex justify-between items-center mb-8">
            <p className="text-secondaryTextColor text-xs tracking-[0.1px]">
              as of 25 May 2019,
              <time> 09:41</time> PM
            </p>
            <div className="trend__wrapper flex gap-x-8">
              <strong className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="2"
                  viewBox="0 0 18 2"
                  fill="none"
                >
                  <path
                    d="M1 1H17"
                    stroke="#3751FF"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Today
              </strong>
              <strong className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="2"
                  viewBox="0 0 18 2"
                  fill="none"
                >
                  <path
                    d="M1 1H17"
                    stroke="#DFE0EB"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Yesterday
              </strong>
            </div>
          </div>
          <img
            src={img}
            alt="Graphic illustrated from illustrators"
            width={720}
            height={406}
          />
        </div>
        <ul className="trend__list border-l border-borderColor py-2 text-center grow">
          {trend_items.map((item, index) => {
            if (index == 4) {
              return <TrendItems {...item} key={index} />;
            } else {
              return <TrendItems {...item} key={index} />;
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default Trend;
