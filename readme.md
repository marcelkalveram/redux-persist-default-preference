[![npm version](https://badge.fury.io/js/redux-persist-default-preference.png)](https://badge.fury.io/js/redux-persist-default-preference)

Storage adaptor to use `react-native-default-preference` as a storage engine for `redux-persist`.

## Install

```
yarn add redux-persist-default-preference
npm install redux-persist-default-preference
```

For iOS, you need to also run:

```
cd ios && pod install
```

## Usage

```
import { persistStore, persistReducer } from 'redux-persist';
import DefaultPreferenceStorage from 'redux-persist-default-preference';

const persistConfig = {
  key: 'root',
  storage: DefaultPreferenceStorage(),
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
```

You can also define a name for the storage. It is used as the key for storing data in `UserDefaults` (iOS) and `SharedPreferences` (Android)

```
DefaultPreferenceStorage("customName")
```
