
class ApiResponse {
    constructor({success = true, message = "Success" , data = null, meta = null}){
        this.success = success;
        this.message = message;
        this.data = data;
        if(meta) this.meta = meta;
    }
}

module.exports = ApiResponse;