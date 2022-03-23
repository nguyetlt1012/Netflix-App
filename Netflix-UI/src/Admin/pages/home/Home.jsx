import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.scss";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import APIapp from "../../../Client/APIS/APIapp";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useMemo, useState } from "react";
export default function HomeAdmin() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [useStats, setUserstats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await APIapp.get("users/stats");
        const statsList = res.data.sort((a, b) => a._id - b._id);
        statsList.map((item) => {
          setUserstats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "new user": item.total,
            },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="container">
      <Topbar />
      <div className="content">
        <Sidebar />
        <div className="homeAdmin">
          <FeaturedInfo />
          <Chart
            data={useStats}
            title="User Analytics"
            grid
            dataKey="new user"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </div>
  );
}
