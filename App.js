import React, { Component } from 'react';

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store , persistor } from './store'

import Loading from './src/sections/components/Loading'
import AppLayout from './src/app';

type Props = {};
export default class App extends Component<Props> {
  state = {
    // listaDeSugerencias: [],
    // listaDeCategorias: [],
  }
  render(){
    return (
      <Provider
        store = { store }
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    )
  }
};

