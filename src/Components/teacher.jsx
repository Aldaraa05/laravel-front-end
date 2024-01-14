import { useState } from "react";
import { Student1 } from "./student1";
export const Teacher = (props) => {
  const data = props.data.suragches;
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {data &&
        data.map((item) => {
          return (
            <Student1
              name={item.name}
              register={item.register}
              angi={item.angi_id}
              id={item.id}
            />
          );
        })}
    </div>
  );
};
