import student from "../Assets/student.gif";
import teacher from "../Assets/teacher.gif";
import "../App.css";

import { useNavigate } from "react-router-dom";
export const Home = () => {
  const nav = useNavigate();
  // const [data, setData] = useState();
  // const getData = async () => {
  //   const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/angiud`);
  //   setData(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(data);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="column"
          onClick={() => {
            nav("/suragch/");
          }}
        >
          <img src={student} className="image" />
          <h1>Сурагч</h1>
        </div>
        <div
          className="column"
          onClick={() => {
            nav("/bagsh/");
          }}
        >
          <img src={teacher} className="image" />
          <h1>Багш</h1>
        </div>
      </div>
    </div>
  );
};
