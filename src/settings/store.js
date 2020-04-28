import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

export const settings = (store) => {
  store.on('@init', () => ({ credentials: {}, data: {} }));

  store.on('credentials/add', (_, { user, app }) => ({ credentials: { user, app } }));

  store.on('data/save', (state, data) => ({ ...state, data }));
};

export const store = createStoreon([process.env.NODE_ENV !== 'production' && storeonDevtools, settings]);
