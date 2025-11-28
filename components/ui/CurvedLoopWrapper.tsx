"use client";

import CurvedLoop from "@/components/CurvedLoop";
import { FC } from "react";

interface CurvedLoopWrapperProps {
  marqueeText?: string;
  speed?: number;
  curveAmount?: number;
  direction?: 'left' | 'right';
  interactive?: boolean;
  className?: string;
}

export const CurvedLoopWrapper: FC<CurvedLoopWrapperProps> = (props) => {
  return (
    <div className="relative w-full overflow-visible" style={{ height: '150px', minHeight: '150px' }}>
      <CurvedLoop {...props} containerHeight="150px" />
    </div>
  );
};

