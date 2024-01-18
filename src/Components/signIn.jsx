import style from "../Styles/signIn.module.css";
import { SignContext } from "./sign";
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  const [sign, setSign] = useContext(SignContext);
  let { suragch } = useParams();
  const [regigster1, setRegister1] = useState();
  const [regigster2, setRegister2] = useState();
  const passwordRef = useRef();
  const registerRef = useRef();
  const [data, setData] = useState();
  const [token, setToken] = useState();
  const nav = useNavigate();
  const swap = () => {
    setSign(!sign);
  };
  const signIn = async () => {
    const a = registerRef.current.value;
    const realRegister = regigster1 + regigster2 + a;
    if (suragch == "suragch") {
      await axios
        .post(`http://127.0.0.1:8000/api/v1/signInSuragch`, {
          register: realRegister,
        })
        .then((res) => {
          setData(res.data);
          if (data && data.password == passwordRef.current.value) {
            nav(`/suragchHome/${data.id}`);
          } else {
            toast("password or register is incorrect");
          }
        });
    } else {
      await axios
        .post(`http://127.0.0.1:8000/api/v1/signInBagsh`, {
          register: realRegister,
          password: passwordRef.current.value,
        })
        .then((res) => {
          setData(res && res.data);
          nav(data && `bagshHome/${data[0]}`, {
            state: { data: data },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className={style.container}>
      <ToastContainer />
      <div className={style.container1}>
        <h1>Нэвтрэх</h1>
        <div className={style.row}>
          <select
            className={style.box}
            value={regigster1}
            onChange={(e) => setRegister1(e.target.value)}
          >
            <option value="А">А</option>
            <option value="Б">Б</option>
            <option value="В">В</option>
            <option value="Г">Г</option>
            <option value="Д">Д</option>
            <option value="Е">Е</option>
            <option value="Ж">Ж</option>
            <option value="З">З</option>
            <option value="И">И</option>
            <option value="Й">Й</option>
            <option value="К">К</option>
            <option value="Л">Л</option>
            <option value="М">М</option>
            <option value="Н">Н</option>
            <option value="О">О</option>
            <option value="П">П</option>
            <option value="Р">Р</option>
            <option value="С">С</option>
            <option value="Т">Т</option>
            <option value="Ф">Ф</option>
            <option value="Х">Х</option>
            <option value="У">У</option>
            <option value="Ч">Ч</option>
          </select>
          <select
            className={style.box}
            value={regigster2}
            onChange={(e) => setRegister2(e.target.value)}
          >
            <option value="А">А</option>
            <option value="Б">Б</option>
            <option value="В">В</option>
            <option value="Г">Г</option>
            <option value="Д">Д</option>
            <option value="Е">Е</option>
            <option value="Ж">Ж</option>
            <option value="З">З</option>
            <option value="И">И</option>
            <option value="Й">Й</option>
            <option value="К">К</option>
            <option value="Л">Л</option>
            <option value="М">М</option>
            <option value="Н">Н</option>
            <option value="О">О</option>
            <option value="П">П</option>
            <option value="Р">Р</option>
            <option value="С">С</option>
            <option value="Т">Т</option>
            <option value="Ф">Ф</option>
            <option value="Х">Х</option>
            <option value="У">У</option>
            <option value="Ч">Ч</option>
          </select>
          <input
            className={style.input}
            placeholder="Регистрийн дугаар"
            type="number"
            ref={registerRef}
          ></input>
        </div>
        <input
          type="password"
          className={style.input}
          minLength="8"
          placeholder="Password дор хаяж 8-н тэмдэгт оруулна уу"
          ref={passwordRef}
        ></input>

        <button className={style.bttn} onClick={signIn}>
          Нэвтрэх
        </button>
        <div className={style.row} style={{ width: "auto" }}>
          <p style={{ fontSize: "15px" }}>Бүртгүүлээгүй бол</p>
          <button className={style.bttn2} onClick={swap}>
            Бүргтгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
