/**
 * Flowtype definitions for index
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 */

declare module 'redux-persist-default-preference' {
  declare type ReduxPersistDefaultPreference = {
    getItem: (
      key: string,
      callback?: (error?: Error, result?: string) => void,
    ) => Promise<String | void>,
    setItem: (
      key: string,
      value: string,
      callback?: (error?: Error) => void,
    ) => Promise<void>,
    removeItem: (
      key: string,
      callback?: (error?: Error) => void,
    ) => Promise<void>,
    ...
  };
  declare var createReduxPersistDefaultPreference: (
    name?: string,
  ) => ReduxPersistDefaultPreference;
  declare export default typeof createReduxPersistDefaultPreference;
}