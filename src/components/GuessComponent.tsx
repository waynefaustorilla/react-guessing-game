import React, { Fragment, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const GuessComponent: FunctionComponent = (): JSX.Element => {
  const { messages } = useSelector((state: RootState) => state.random);

  return (
    <Fragment>
      <p>{messages[0]}</p>
    </Fragment>
  );
};

export default GuessComponent;