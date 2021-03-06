import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({

    state: {
        lists: JSON.parse(savedLists)
    },
    mutations: {
        addlist(state,payload){
            state.lists.push({title: payload.title})
        },
        removelist(state, payload) {
            state.lists.splice(payload.listIndex, 1)
        },
        addCardToList(state, payload) {
            state.lists[payload.listIndex].cards.push({ body: payload.body })
        },
    },
    actions: {
        addlist(context,payload){
            context.commit('addlist',payload)
        },
        removelist(context, payload) {
            context.commit('removelist', payload)
        },
        addCardToList(context, payload) {
            context.commit('addCardToList', payload)
        },
    },
    getters: {
    }
})
store.subscribe((mutation, state) => {
    localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})
export default store


// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// const savedLists = localStorage.getItem('trello-lists')
//
// const store =  new Vuex.Store({
//     state: {
//         lists: savedLists? JSON.parse(savedLists)
//             : [
//                 {
//                     title: 'Backlog',
//                     cards: [
//                         { body: 'English' },
//                         { body: 'Mathematics' },
//                     ]
//                 },
//                 {
//                     title: 'Todo',
//                     cards: [
//                         { body: 'Science' }
//                     ]
//                 },
//                 {
//                     title: 'Doing',
//                     cards: []
//                 }
//             ]
//     },
//     mutations: {
//         addlist(state, payload) {
//             state.lists.push({ title: payload.title, cards:[] })
//         },
//         removelist(state, payload) {
//             state.lists.splice(payload.listIndex, 1)
//         },
//     },
//     actions: {
//         addlist(context, payload) {
//             context.commit('addlist', payload)
//         },
//         removelist(context, payload) {
//             context.commit('removelist', payload)
//         },
//     },
//
//     getters: {
//     },
// })
//
// store.subscribe((mutation, state) => {
//     localStorage.setItem('trello-lists', JSON.stringify(state.lists))
// })
//
// export default store
