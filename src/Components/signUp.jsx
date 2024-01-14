import style from "../Styles/signIn.module.css";
import { SignContext } from "./sign";
import { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const SignUp = () => {
  let { suragch } = useParams();
  const [sign, setSign] = useContext(SignContext);
  const [regigster1, setRegister1] = useState();
  const [regigster2, setRegister2] = useState();
  const angiIdRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordRef2 = useRef();
  const registerRef3 = useRef();
  const swap = () => {
    setSign(!sign);
  };
  const signUp = () => {
    const a = registerRef3.current.value;
    const realRegister = regigster1 + regigster2 + a;

    if (suragch == "suragch") {
      if (passwordRef.current.value == passwordRef2.current.value) {
        axios
          .post("http://127.0.0.1:8000/api/v1/addSuragch", {
            angi_id: angiIdRef.current.value,
            name: nameRef.current.value,
            register: realRegister,
            password: passwordRef.current.value,
          })
          .then((res) => {
            console.log(res);
            swap();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        toast("passwords are not matched");
      }
    }
    if (suragch == "bagsh") {
      if (passwordRef.current.value == passwordRef2.current.value) {
        axios
          .post("http://127.0.0.1:8000/api/v1/addBagsh", {
            angi_id: angiIdRef.current.value,
            name: nameRef.current.value,
            register: realRegister,
            password: passwordRef.current.value,
          })
          .then((res) => {
            console.log(res);
            swap();
          });
      } else {
        toast("passwords are not matched");
      }
    }
  };
  return (
    <div className={style.container}>
      <ToastContainer />
      <div className={style.container1}>
        <h1>Бүргтгүүлэх</h1>
        <input
          className={style.input}
          placeholder="Овог нэрээ бичнэ үү"
          type="text"
          ref={nameRef}
        ></input>
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
            ref={registerRef3}
          ></input>
        </div>
        <input
          type="password"
          className={style.input}
          minLength="8"
          placeholder="Password дор хаяж 8-н тэмдэгт оруулна уу"
          ref={passwordRef}
        ></input>
        <input
          type="password"
          className={style.input}
          minLength="8"
          placeholder="Password-оо дахин давтана уу"
          ref={passwordRef2}
        ></input>
        <div className={style.row} style={{ justifyContent: "space-around" }}>
          <h3>Ангиа сонгоно уу</h3>
          <div>
            <select
              className={style.box}
              style={{ width: "50px" }}
              ref={angiIdRef}
            >
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">6</option>
              <option value="6">7</option>
              <option value="7">8</option>
              <option value="8">9</option>
              <option value="9">10</option>
              <option value="10">11</option>
              <option value="11">12</option>
            </select>
          </div>
        </div>

        <button className={style.bttn} onClick={signUp}>
          Бүртгүүлэх
        </button>
        <div className={style.row} style={{ width: "auto" }}>
          <p style={{ fontSize: "15px" }}>аль хэдийн бүртгүүлсэн бол</p>
          <button className={style.bttn2} onClick={swap}>
            Нэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
};
