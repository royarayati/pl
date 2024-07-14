// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftNavigationBackSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function LeftNavigationBackSvgrepoComsvgIcon(
  props: LeftNavigationBackSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 29.73a1 1 0 01-.71-.29L9.93 18.12a3 3 0 010-4.24L21.24 2.56A1 1 0 1122.66 4L11.34 15.29a1 1 0 000 1.42L22.66 28a1 1 0 010 1.42 1 1 0 01-.66.31z"
        }
        fill={"currentColor"}
        data-name={"arrow left"}
      ></path>
    </svg>
  );
}

export default LeftNavigationBackSvgrepoComsvgIcon;
/* prettier-ignore-end */
