import axios from "axios";

export default {
    state: {
        news: []
    },
    actions: {
        loadNews ({ commit }) {
            axios
                .get('api/news.json')
                .then(r => r.data)
                .then(payload => {
                    commit('setNews', payload)
                })
        },
    },
    mutations: {
        setNews : (state, payload) => {
            state.news = payload
        }
    },
    getters: {
        news : state => {
            return state.news
        },
    }
}
