import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import city from './data/city.js'
const mock=new AxiosMockAdapter(axios)
const data=()=>
{
    mock.onGet('/city').reply((config)=>
    {
        return new Promise((resolve,reject)=>
        {
            resolve([200,city])
        })
    })
}
export default data