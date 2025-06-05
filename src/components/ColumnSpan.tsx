import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  columns: number;
  children: ReactNode;
}

const ColumnSpan: FunctionComponent<Props> = ({ columns, children }: Props): JSX.Element => {
  return (
    <div
      className="w-full"
      style={{ gridColumn: `span ${columns} / span ${columns}` }}
    >
      {children}
    </div>
  );
};

export default ColumnSpan;