/**
 * Mocking client-server processing
 */
import _products from './Channel_Mix.csv'
import Papa from 'papaparse'

const TIMEOUT = 100;

export default {
  //fetchChannelMixData: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  fetchChannelMixData: (cb, timeout) => setTimeout(() => {
    Papa.parse(_products, {
      download:true,
      complete: function(results) {
        //console.log("Finished:", results.data);
        cb(results)
      }
    });
  }, timeout || TIMEOUT),
  //buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
