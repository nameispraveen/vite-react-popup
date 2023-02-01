import React, { useState } from "react";
import css from "./List.module.css";
import Example from './Example'
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
      <div>Message Id:{msg.msg.id}</div>
      <div>Subject:{msg.msg.subject}</div>
      <div>Body :<div dangerouslySetInnerHTML={{ __html: msg.msg.body }} /></div>
      <button onClick={information} className={css.btn}>
        NEED MORE INFORMATION
      </button>
      <Example />
      {info ?? <div>hello this is me </div>}
      <hr />
    </div>
  );
};
export default List;
