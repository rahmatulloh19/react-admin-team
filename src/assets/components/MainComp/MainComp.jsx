import CardHeader from "../CardHeader/CardHeader";
import Header from "../Header/Header";
import Trend from "../Trend/Trend";

function MainComp() {
  return (
    <main className="p-8 w-10/12">
      <Header />
      <CardHeader />
      <Trend />
    </main>
  );
}

export default MainComp;
