import React from 'react';
import { useSettings } from './settings';

export const SubComponent = () => {
  const { saveSettings, isInitialized } = useSettings();

  return (
    <div>
      {isInitialized ? (
        <div>
          <button onClick={() => saveSettings({ property: 5 })}>Save settings</button>
        </div>
      ) : null}
    </div>
  );
};
