import { useContext, useEffect, useState } from "react";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
import { MdVisibility } from "../../Imports/Icons";
import { GlobalState } from "../../Contexts/GlobalState";
const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  const state = useContext(GlobalState);
  const [token] = state.token;
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: { Authorization: token },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WidgetSm;
