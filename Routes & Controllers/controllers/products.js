const getAllProducts = async (req, res) => {
    res.status(200).json({msg : "We are Products"})
} 

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "We are Testing Products"})
}

module.exports = { getAllProducts, getAllProductsTesting };