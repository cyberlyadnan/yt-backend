const asynsHandler = (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || error.json({
            success:false,
            message:error.message
        }))
    }

}


export default asynsHandler