import { useContext, useEffect, useState } from "react";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
import { MdVisibility } from "../../Imports/Icons";
import { Visibility } from "@material-ui/icons";
import { GlobalState } from "../../Contexts/GlobalState";
import axios from "axios";
const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  const state = useContext(GlobalState);
  const [token] = state.token;
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/user/getuser", {
          headers: { Authorization: token },
        });
        const take = res.data;
        console.log(res.data);
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  console.log(newUsers, "user");
  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {newUsers.map((user) => (
            <li className="widgetSmListItem">
              <img
                src={
                  user.profilePic ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.name}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WidgetSm;
