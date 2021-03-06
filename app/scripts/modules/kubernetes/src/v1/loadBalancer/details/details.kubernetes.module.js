import { KUBERNETES_V1_LOADBALANCER_DETAILS_DETAILS_CONTROLLER } from './details.controller';
('use strict');

import { module } from 'angular';

export const KUBERNETES_V1_LOADBALANCER_DETAILS_DETAILS_KUBERNETES_MODULE = 'spinnaker.loadBalancer.details.kubernetes';
export const name = KUBERNETES_V1_LOADBALANCER_DETAILS_DETAILS_KUBERNETES_MODULE; // for backwards compatibility
module(KUBERNETES_V1_LOADBALANCER_DETAILS_DETAILS_KUBERNETES_MODULE, [
  KUBERNETES_V1_LOADBALANCER_DETAILS_DETAILS_CONTROLLER,
]);
