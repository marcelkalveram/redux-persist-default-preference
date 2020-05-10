declare module 'redux-persist-default-preference' {
  type ReduxPersistDefaultPreference = {
    getItem: (
      key: string,
      callback?: (error?: Error, result?: string) => void,
    ) => Promise<String | undefined>;

    setItem: (
      key: string,
      value: string,
      callback?: (error?: Error) => void,
    ) => Promise<void>;

    removeItem: (
      key: string,
      callback?: (error?: Error) => void,
    ) => Promise<undefined>;
  };

  const createReduxPersistDefaultPreference: (
    name?: string,
  ) => ReduxPersistDefaultPreference;
  export default createReduxPersistDefaultPreference;
}
