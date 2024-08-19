import React from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const App = () => {
  const { data } = useSelector((state: any) => state.app);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <a className="text-3xl font-bold underline">Learn React</a>
      </header>
    </div>
  );
};

export default App;
