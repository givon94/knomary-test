import axios from "axios";

export default {
    state: {
        education: []
    },
    actions: {
        loadEducation ({ commit }) {
            axios
                .get('api/education.json')
                .then(r => r.data)
                .then(payload => {
                    commit('setEducation', payload)
                })
        },
    },
    mutations: {
        setEducation : (state, payload) => {
            state.education = payload
        }
    },
    getters: {
        education : state => {
            return state.education
        },
    }
}
