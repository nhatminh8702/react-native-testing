import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
export default function AddIcon(props: any) {
  return (
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
        d="M6 12h6m0 0h6m-6 0v6m0-6V6"
      />
    </Svg>
  );
}
