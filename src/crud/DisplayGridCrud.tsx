import React from "react";
import { IFormObject } from "./ParentCrud";

interface IDisplay {
  data: IFormObject[];
}

export default function DisplayGridCrud(props: IDisplay) {
  return (
    <div className="flex flex-col gap-2">
      {props.data.map((item, index) => (
        <div key={index} className="flex gap-3">
          {index} {item.firstName} {item.lastName}
        </div>
      ))}
    </div>
  );
}
