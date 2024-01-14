import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../Styles/teacherField.module.css";
import { Teacher } from "./teacher";
import { TeacherProfile } from "./teacherProfile";
export const TeacherField = () => {
  const location = useLocation();
  const [data, setData] = useState();
  const angi_id = location.state.data;
  const getData = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/v1/angiud/${angi_id}`
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={style.container}>
      <h1>Анги: {angi_id}</h1>
      {data &&
        data[1].map((item) => {
          return <TeacherProfile data={item} />;
        })}
      {data &&
        data[0].map((item) => {
          return <Teacher data={item} />;
        })}
    </div>
  );
};
