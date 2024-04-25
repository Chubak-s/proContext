import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            lists: [{id: 1, name: 'List 1', items: [
                    {id:1, name: 'Item 1', count: 0, color: '#D74848'},
                    {id:2, name: 'Item 2', count: 0, color: '#DDCD45'},
                    {id:3, name: 'Item 3', count: 0, color: '#31AA3D'},
                    {id:4, name: 'Item 4', count: 0, color: '#2F3AFB'}, ]},
                {id: 2, name: 'List 2', items: [
                        {id:1, name: 'Item 1', count: 0, color: '#000'},
                        {id:2, name: 'Item 2', count: 0, color: '#000'},
                        {id:3, name: 'Item 3', count: 0, color: '#000'},
                        {id:4, name: 'Item 4', count: 0, color: '#000'}, ]},
                {id: 3, name: 'List 3', items: [
                        {id:1, name: 'Item 1', count: 0, color: '#000'},
                        {id:2, name: 'Item 2', count: 0, color: '#000'},
                        {id:3, name: 'Item 3', count: 0, color: '#000'},
                        {id:4, name: 'Item 4', count: 0, color: '#000'}, ]},
                {id: 4, name: 'List 4', items: [
                        {id:1, name: 'Item 1', count: 0, color: '#000'},
                        {id:2, name: 'Item 2', count: 0, color: '#000'},
                        {id:3, name: 'Item 3', count: 0, color: '#000'},
                        {id:4, name: 'Item 4', count: 0, color: '#000'}, ]},
                {id: 5, name: 'List 5', items: [
                        {id:1, name: 'Item 1', count: 0, color: '#000'},
                        {id:2, name: 'Item 2', count: 0, color: '#000'},
                        {id:3, name: 'Item 3', count: 0, color: '#000'},
                        {id:4, name: 'Item 4', count: 0, color: '#000'}, ]},],
            listsResult: [],
        }
    },
    mutations:{
    },
    action: {},
    getters: {},
})

export default store;
