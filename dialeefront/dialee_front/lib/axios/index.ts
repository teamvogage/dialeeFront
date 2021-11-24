import axios, { AxiosError,AxiosResponse } from "axios"
import {api} from "../constants"
export interface ISendAccountData{
    [index:string]:string;
    "voyager_name": string,
    "email": string,
    "password1": string,
    "password2": string
}
export interface ICheckData{
    "is_valid":Boolean,
    "message":string,
}
export interface ILoginData{
    "status":boolean,
    "access_token":string|null,
    "refresh_token":String|null,
    "message":string,
}
export const sendSignUp=async (data:ISendAccountData)=>{// 회원가입 
    try{
        await axios.post(`${api}/accounts/`,data);
        const goodResponse:ICheckData={
            is_valid:true,
            message:"회원가입이 완료되었습니다~! 아래 버튼을 눌러서 로그인을 해주세요.",
        }
        return {data:goodResponse}
   }catch(error){
   
    if(!(error as AxiosError).response){
        const NoResponse:ICheckData={
            is_valid:false,
            message:"인터넷 문제나 서버문제가 발생하였습니다."
        }
        return {data:NoResponse}
    }
        const ServerError:ICheckData={
            is_valid:false,
            message:"서버 오류가 발생하였습니다."
        }
        ServerError.message=`${ServerError.message}::${(error as AxiosError).response?.status}`
        return {data:ServerError};
    
    }
}
export const sendCheckEmail=async(email:string)=>{//이메일체크
        const data={
            "email":email
        }
     try{
       await axios.post(`${api}/accounts/email-check/`,data);
        const goodResponse:ICheckData={
                 is_valid:true,
                 message:"",
        }
        return {data:goodResponse}
    }catch(error){
        console.log(error);
        if(!(error as AxiosError).response){
            const NoResponse:ICheckData={
                is_valid:false,
                message:"인터넷 문제나 서버문제가 발생하였습니다."
            }
            return {data:NoResponse}
        }
        if ((error as AxiosError).response?.status === 409) {
            
            const Conflict:ICheckData={
                is_valid:false,
                message:"이메일이 중복입니다."
            }
            return {data:Conflict};
        }
        else{
            const ServerError:ICheckData={
                is_valid:false,
                message:"서버 오류가 발생하였습니다."
            }
            ServerError.message=`${ServerError.message}::${(error as AxiosError).response?.status}`
            return {data:ServerError};
        }
        
     }
}
export const sendLogin=async(email:string,pwd:string)=>{//로그인
    const data={
        email:email,
        password:pwd
    }
    try{
        const res:AxiosResponse<any>=await axios.post(`${api}/accounts/login/`,data);
        console.log(res.data);
        const goodResponse:ILoginData={
            status:true,
            access_token:res.data?.access_token,
            refresh_token:res.data?.refresh_token,
            message:"로그인이 성공하였습니다."
        }
        return goodResponse;
    }catch(error){

        if(!(error as AxiosError).response){
            const NoResponse:ILoginData={
                status:false,
                access_token:null,
                refresh_token:null,
                message:"인터넷 문제나 서버문제가 발생하였습니다."
            }
            return {data:NoResponse}
        }
            const ServerError:ILoginData={
                status:false,
                access_token:null,
                refresh_token:null,
                message:"서버 오류가 발생하였습니다."
            }
            ServerError.message=`${ServerError.message}::${(error as AxiosError).response?.status}`
            return {data:ServerError};
    }

}