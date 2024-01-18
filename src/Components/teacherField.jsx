import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../Styles/teacherField.module.css";
import { Maping } from "./maplalt";
import { TeacherProfile } from "./teacherProfile";
export const TeacherField = () => {
  const location = useLocation();
  const nav = useNavigate();
  const angi_id = location.state.data[0];
  const token = location.state.data.token;
  console.log(token);
  const [data, setData] = useState();
  const getData = async () => {
    const { data } = await axios.get(
      angi_id && `http://127.0.0.1:8000/api/v1/angiud/${angi_id}`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const logOut = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/v1/logout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        token = null;
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={style.container}>
      <div className={style.row}>
        <h1 className={style.angi}>Анги: {angi_id}</h1>
        <button className={style.button} onClick={logOut}>
          Logout
        </button>
      </div>

      {data &&
        data[1].map((item) => {
          return <TeacherProfile data={item} token={token} />;
        })}
      {data &&
        data[0].map((item) => {
          return <Maping data={item} token={token} />;
        })}
    </div>
  );
};
