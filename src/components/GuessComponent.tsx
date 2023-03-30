import React, { Fragment, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const GuessComponent: FunctionComponent = (): JSX.Element => {
  const { message } = useSelector((state: RootState) => state.random);

  return (
    <Fragment>
      <p>{message}</p>
    </Fragment>
  );
};

export default GuessComponent;