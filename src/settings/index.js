import { store } from './store';
import { useState, useEffect, useMemo } from 'react';

export const initialize = (user, app) => store.dispatch('credentials/add', { user, app });

const isInitialized = (credentials) => credentials.user && credentials.app;

const saveSettings = async (data) => {
  let { credentials } = store.get();
  if (!isInitialized(credentials)) {
    throw new Error('Not initialized');
  }

  await setTimeout(() => {
    store.dispatch('data/save', data);
  }, 3000);

  return true;
};

export const useSettings = () => {
  let rerender = useState({});

  // update the hook's state every time the store is updated
  useEffect(() => {
    return store.on('@changed', () => rerender[1]({}));
  }, []);

  // this gets called everytime the hook's state is updated, so every time the store is updated
  return useMemo(() => {
    let { credentials } = store.get();

    return { initialize, isInitialized: isInitialized(credentials), saveSettings };
  }, [rerender[0]]);
};
