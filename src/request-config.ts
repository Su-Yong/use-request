import React from 'react';
import StateManager from './state';
import type { RequestConfig as RequestConfigType } from './types';

export const RequestConfigContext = React.createContext<RequestConfigType>({
  state: new StateManager(),
});

export const {
  Provider: RequestConfigProvider,
  Consumer: withRequestConfig,
} = RequestConfigContext;
