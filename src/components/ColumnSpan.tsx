import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  columns: number;
  children: ReactNode;
}

const ColumnSpan: FunctionComponent<Props> = ({ columns, children }: Props): JSX.Element => {
  return (
    <div className={`col-span-${columns} w-full`}>
      {children}
    </div>
  );
};

export default ColumnSpan;