import { useState } from "react";
import { Student1 } from "./student1";
export const Maping = (props) => {
  const data = props.data.suragches;
  const token = props.token;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data &&
        data.map((item) => {
          return (
            <Student1
              name={item.name}
              register={item.register}
              angi={item.angi_id}
              id={item.id}
              token={token}
            />
          );
        })}
    </div>
  );
};
