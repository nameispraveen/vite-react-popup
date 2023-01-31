import React, { useState } from "react";
import css from "./List.module.css";

const List = (msg) => {
  const [info, setinfo] = useState(false);
  console.log(msg.msg);
  function information() {
    setinfo(true);

    console.log(info);
  }
  console.log(info);
  return (
    <div key={msg.msg.id} className={css.one}>
      <div>id:{msg.msg.id}</div>
      <div>subject:{msg.msg.subject}</div>
      <div dangerouslySetInnerHTML={{ __html: msg.msg.body }}></div>
      <button onClick={information} className={css.btn}>
        NEED MORE INFORMATION
      </button>
      {info ?? <div>hello this is me </div>}
      <hr />
    </div>
  );
};
export default List;
