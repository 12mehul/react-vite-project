import React from "react";

function Child(props: any) {
  console.log(props);
  console.log("this is render");
  return <div>ChildNew</div>;
}

export default React.memo(Child);
