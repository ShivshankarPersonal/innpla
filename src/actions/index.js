//import channeMix from '../api/shop'
import Papa from 'papaparse'
import channelMixData from '../api/Channel_Mix.csv'
import shop from '../api/shop'
import channeMix from '../api/channelMix'
//import * as types from '../constants/ActionTypes'


export const fetchChannelMixData  = () => dispatch => {
  channeMix.fetchChannelMixData(data => {
    //console.log(data)
    //Papa.parse('../api/Channel_Mix.csv', {
    //  complete: function(results) {
    //    console.log("Finished:", results.data);
    //  }
    //});
    dispatch(receivedData(data))
  })
  //Papa.parse(channelMixData, {
  //  complete: function(results) {
  //    console.log("Finished:", results.data);
  //  }
  //});
}




const receivedData = data => ({
  type: 'CHANNEL_MIX',
  data: data.data
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    console.log(products)
    //dispatch(receiveProducts(products))
  })
}



let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
