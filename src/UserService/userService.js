import customApiCalls from "../customaxios/privateAxios"

export const registrationService = async (data) => {
    const response = await customApiCalls("POST", "api/registration", data);
    return response;
}
export const loginService = async (data) => {
    const response = await customApiCalls("POST", "api/login", data)
    return response
}
export const enrollmentService = async (data)=>{
    const  response = await customApiCalls("PUT","api/update",data)
    return response
}
export const userService = {
    registrationService,
    loginService,
    enrollmentService
}