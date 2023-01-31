import React, { useEffect, useState } from "react";
import List from "./List";

export default function Messages() {
  const [msg, setmsg] = useState([]);
  var url =
    "https://khoros-server-vercel-bikhz4mt9-koushil-mankali.vercel.app/api/messages";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setmsg(res[0]?.data?.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log("Items is ", msg);
  return (
    <div>
      {msg.map((item) => {
        return (
          <div>
            <List msg={item} />
          </div>
        );
      })}
    </div>
  );
}
