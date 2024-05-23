import axiosInstance from "./axiosInterceptors";

const axiosMethodsMapping = {
    'GET': axiosInstance.get,
    'POST': axiosInstance.post,
    'PUT': axiosInstance.put,
    'DELETE': axiosInstance.delete
};

const customApiCalls = async (requestType, url, data) => {
    try {
        const method = axiosMethodsMapping[requestType];
        if (!method) {
            console.log("Method is not found with this request type:", requestType);
            throw new Error("Invalid Request Type");
        }
        else {
            if(method===axiosInstance.post || method===axiosInstance.put){
                const response = await method(url, data);
                // console.log("jamal",response);
                return response;
            }else{
                const response = await method(url);
                return response;
            }
            
             // Return the response data
        }
    } catch (error) {
        console.error("Error:", error);
        throw error; // Re-throw the error to handle it outside
    }
};

export default customApiCalls;
