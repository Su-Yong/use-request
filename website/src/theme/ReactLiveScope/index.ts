import React from 'react';
import {
  useRequest,
  useRequestConfig,
  RequestConfig,
  createOptions,
} from '../../../../src';

const ReactLiveScope = {
  React,
  ...React,
  useRequest,
  useRequestConfig,
  RequestConfig,
  createOptions,
};

export default ReactLiveScope;
