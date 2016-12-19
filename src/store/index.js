import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  count: 0,
  history: [],
  isBusy: false,
  artists: [],
  qpTitle: null,
  stateTitle: '',
  stateDescription: '',
  stateEmail: '',
  stateAction: '',
  stateInstructions: '',
  stateDueDate: '',
  stateStepList: [
    {
      // 'stepNumber': 1,
      // 'name': 'Max Carpenter',
      'email': 'abc@123.com',
      'dueDate': '2017-01-01T00:00:00Z',
      'action': 'Review and Approve Shipment',
      'instructions': 'Hi Max. This should be a standard approval.',
      'notify': false,
      'pause': false
    },
    {
      // 'stepNumber': 2,
      // 'name': 'Stacy Rodriquez',
      'email': 'def@456.com',
      'dueDate': '2017-01-02T00:00:00Z',
      'action': 'Review and Approve Shipment',
      'instructions': 'See attachments and let me know if you have questions.',
      'notify': false,
      'pause': false
    },
    {
      // 'stepNumber': 3,
      // 'name': 'Ben Simmons',
      'email': 'ghi@789.com',
      'dueDate': '2017-01-03T00:00:00Z',
      'action': 'Review Shipment for Customs Concerns',
      'instructions': 'RVP has cleared this. Your turn!',
      'notify': false,
      'pause': false
    },
    {
      'email': '',
      'dueDate': '',
      'action': '',
      'instructions': '',
      'notify': false,
      'pause': false
    }
  ]
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
