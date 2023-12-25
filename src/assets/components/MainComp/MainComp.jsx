import CardHeader from "../CardHeader/CardHeader";
import Details from "../Details/Details";
import Header from "../Header/Header";
import Trend from "../Trend/Trend";

function MainComp() {
  return (
    <main className="p-8 w-10/12 justify-self-end">
      <Header />
      <CardHeader />
      <Trend />
      <Details />
    </main>
  );
}

export default MainComp;
