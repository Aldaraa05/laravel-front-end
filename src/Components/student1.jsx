import style from "../Styles/teacher.module.css";
import image from "../Assets/student.png";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Student1 = (props) => {
  const [name, setName] = useState(props.name);
  const [register, setRegister] = useState(props.register);
  const [angi, setAngi] = useState(props.angi);
  const token = props.token;
  const updateSuragch = async () => {
    if (angi < 13) {
      await axios
        .put(`http://127.0.0.1:8000/api/v1/updateSuragch/${props.id}`, {
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
    } else {
      toast("анги 12-оос хэтэрсэн байх боломжгүй");
    }
  };
  const deleteSuragch = async () => {
    await axios

      .delete(`http://127.0.0.1:8000/api/v1/deleteSuragch/${props.id}`, {
        headers: {
          Authorization: token && `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.reload();
      });
  };
  return (
    <div className={style.user}>
      <ToastContainer />
      <div className={style.userModel}>
        <div className={style.column1}>
          <h3>Сурагч</h3>
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
            <button className={style.button} onClick={updateSuragch}>
              edit
            </button>
            <button
              className={style.button}
              style={{ backgroundColor: "Red" }}
              onClick={deleteSuragch}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
