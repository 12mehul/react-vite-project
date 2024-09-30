import React, { useState } from "react";
import { IReadMore } from "../interface/IProduct";

const ReadMore = (props: IReadMore) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const expandText = React.useMemo(() => {
    return props.props.length > 20
      ? props.props.slice(0, 20).concat("...")
      : props.props;
  }, [props.props]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      {isReadMore ? expandText : props.props}
      {props.props.length > 20 && (
        <span
          onClick={toggleReadMore}
          className="ml-1 underline cursor-pointer text-[#007bff] leading-normal"
        >
          {isReadMore ? "Read More" : "Read Less"}
        </span>
      )}
    </div>
  );
};

export default ReadMore;
