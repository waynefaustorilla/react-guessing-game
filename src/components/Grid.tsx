import React, { FunctionComponent, ReactNode } from "react";
import styles from "./../css/container.module.css";

interface Props {
  columns: number;
  children: ReactNode;
}

const Grid: FunctionComponent<Props> = ({ columns, children }: Props): JSX.Element => {
  return (
    <div
      className={`grid ${styles.container}`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
};

export default Grid;