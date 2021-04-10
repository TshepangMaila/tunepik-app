

export const state = {

  reporter : {
    reportObj : null,
    type : ''
  },

}

export const getters = {

  reporter : state => state.reporter,

}

export const mutations = {

  SET_REPORT : (state, obj, type) => {

    state.reporter.reportObj = obj
    state.reporter.type = type

  }

}

export const actions = {}
