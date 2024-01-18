import { useState } from "react";
import style from "../Styles/teacher.module.css";
import image from "../Assets/teacher.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const TeacherProfile = (props) => {
  const data = props.data.bagsh;
  const [name, setName] = useState(data.name);
  const [register, setRegister] = useState(data.register);
  const [angi, setAngi] = useState(data.angi_id);
  const token = props.token;
  const updateBagsh = async () => {
    if (angi > 12) {
      toast("анги 12-оос хэтэрсэн байх боломжгүй");
    } else {
      await axios
        .put(`http://127.0.0.1:8000/api/v1/updateBagsh/${data.id}`, {
          headers: {
            Authorization: token && `Bearer ${token}`,
          },
          angi_id: angi,
          name: name,
          register: register,
        })
        .then((res) => {
          window.location.reload();
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
        <div className={style.column1}>
          <h3>Багш</h3>
          <img src={image} className={style.image} />
        </div>
        <div className={style.column}>
          <div className={style.row}>
            <p>Нэр:</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={style.input}
            />
          </div>
          <div className={style.row}>
            <p>Регистр:</p>
            <input
              value={register}
              onChange={(e) => setRegister(e.target.value)}
              className={style.input}
            />
          </div>
          <div className={style.row}>
            <p>Анги:</p>
            <input
              value={angi}
              type="number"
              className={style.input}
              onChange={(e) => setAngi(e.target.value)}
            />
          </div>

          <div>
            <button className={style.button} onClick={updateBagsh}>
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
