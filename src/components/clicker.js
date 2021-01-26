import styled from "styled-components";
import React, { useState } from "react";

const Panel = styled.div`
  width: 300px;
  height: 300px;
`;

export const Clicker = () => {
  const [count, setCount] = useState(0);

  return (
    <Panel className="panel">
      <h1>Panel</h1>
      <p className="value">{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </Panel>
  );
};
