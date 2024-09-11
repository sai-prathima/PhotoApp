// import { Getdata } from "./Service";
import {takeEvery,call,put} from "redux-saga/effects";
import Reducer from "./Redux/reducer";
import { getApi } from "./Service";


function* fetchData(action:any){
    try{
        console.log("12355")
        // const resu=yield call(Getdata())
        const resu=yield call(getApi,action.payload)
        // console.log(resu)
        yield put({type:"FETCHSUCCESS",payload:resu})
    }catch(error){
        yield put({type:"ERROR"})
        console.log("hellooooo")
    }
    
}

function* mysaga(){
    yield takeEvery("SUCCESS",fetchData)
}
export default mysaga;