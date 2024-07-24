import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const BackIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 16.069V7.93c0-.606 0-.908-.12-1.049a.5.5 0 0 0-.42-.173c-.183.014-.397.228-.826.657l-4.068 4.068c-.198.198-.297.297-.335.411a.5.5 0 0 0 0 .31c.038.114.137.213.335.41l4.068 4.07c.429.428.643.642.827.656a.5.5 0 0 0 .42-.174c.119-.14.119-.443.119-1.048Z"
    />
  </Svg>
);
export default BackIcon;
