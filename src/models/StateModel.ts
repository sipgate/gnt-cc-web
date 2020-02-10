import ClusterModel from './ClusterModel';

export default class StateModel {
  clusters: Array<ClusterModel> = [];

  constructor () {
    this.clusters = [
      {
        id: 0,
        name: 'HQ'
      },
      {
        id: 1,
        name: 'Datacenter 1'
      },
      {
        id: 2,
        name: 'Datacenter 2'
      }
    ];
  }
}
