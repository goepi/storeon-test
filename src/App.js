import React, { useEffect } from 'react';
import { useSettings } from './settings';
import { SubComponent } from './SubComponent';

const App = () => {
  const { initialize } = useSettings();
  useEffect(() => {
    initialize('marcus', 'myApp');
  }, []);

  return <SubComponent />;
};

export default App;
