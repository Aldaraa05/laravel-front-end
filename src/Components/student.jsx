import { useLocation, useParams } from "react-router-dom";
import style from "../Styles/user.module.css";
import image from "../Assets/student.png";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export const Student = () => {
  const param = useParams();
  const id = param.id;
  const [id1, setId] = useState();
  const [name, setName] = useState();
  const [register, setRegister] = useState();
  const [angi, setAngi] = useState();
  const getData = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/v1/suragchNar/${id}`
    );
    setName(data.name);
    setAngi(data.angi_id);
    setRegister(data.register);
    setId(data.id);
  };
  useEffect(() => {
    getData();
  }, []);
  const updateSuragch = async () => {
    if (angi > 12) {
      toast("анги 12-оос хэтэрсэн байх боломжгүй");
    } else {
      axios
        .put(`http://127.0.0.1:8000/api/v1/updateSuragch/${id1}`, {
          angi_id: angi,
          name: name,
          register: register,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className={style.user}>
      <ToastContainer />
      <div className={style.userModel}>
        <div>
          <img src={image} className={style.image} />
        </div>
        <div className={style.column}>
          <div className={style.row}>
            <p>Нэр:</p>
            <input
              value={name && name}
              onChange={(e) => setName(e.target.value)}
              className={style.input}
            />
          </div>
          <div className={style.row}>
            <p>Регистр:</p>
            <input
              value={register && register}
              onChange={(e) => setRegister(e.target.value)}
              className={style.input}
            />
          </div>
          <div className={style.row}>
            <p>Анги:</p>
            <input
              value={angi && angi}
              type="number"
              className={style.input}
              onChange={(e) => setAngi(e.target.value)}
            />
          </div>

          <div>
            <button className={style.button} onClick={updateSuragch}>
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
