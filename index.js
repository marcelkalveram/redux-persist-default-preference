import { Platform } from 'react-native';
import defaultPreference from 'react-native-default-preference';

const noop = () => null;

export default (name = null) => {
  if (name !== null) {
    defaultPreference.setName(name);
  }

  return {
    getItem: (key, callback = noop) =>
      defaultPreference
        .get(key)
        .then((data) => callback(null, data))
        .catch((error) => callback(error)),

    setItem: (key, value, callback = noop) =>
      defaultPreference
        .set(key, value)
        .then(() => callback())
        .catch((error) => callback(error)),

    removeItem: (key, callback = noop) =>
      defaultPreference
        .clear(key)
        .then(() => callback())
        .catch((error) => callback(error)),
  };
};
