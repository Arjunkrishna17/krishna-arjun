import { MutableRefObject } from "react";

export const onTouchStart = (e: any, ref: MutableRefObject<number>) => {
  ref.current = e.touches.startX;
};

export const onTouchEnd = (
  e: any,
  ref: MutableRefObject<number>,
  setIsClick: (click: boolean) => void
) => {
  const diff = Math.abs(e.touches.startX - ref.current);
  if (diff < 2) {
    setIsClick(true);
  } else {
    setIsClick(false);
  }
};
