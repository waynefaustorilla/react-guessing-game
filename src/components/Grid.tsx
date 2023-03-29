import React, { FunctionComponent, ReactNode } from "react";
import styles from "./../css/container.module.css";

interface Props {
  columns: number;
  children: ReactNode;
}

const Grid: FunctionComponent<Props> = ({ columns, children }: Props): JSX.Element => {
  return (
    <div className={`grid grid-cols-${columns} ${styles.container}`}>
      {children}
    </div>
  );
};

export default Grid;