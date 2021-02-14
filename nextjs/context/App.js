import { createContext } from 'react';

export const AppContext = createContext({
  search: {
    count: 0,
    seed: '',
    setSearch: () => {},
  },
});
