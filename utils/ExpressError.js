class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode=statusCode;
        thsi.message=message;
    }
}
module.exports=ExpressError;