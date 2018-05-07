import { combineReducers } from 'redux'
import mock from '../../mock';
let initState =
{
    city: []
}
function hello_city(state=initState.city, action)
{
    if(action.type === 'HELLO_CITY')
    {
        return action.data
    }
    return state
}
mock()
export default combineReducers(
{
    city: hello_city,
})