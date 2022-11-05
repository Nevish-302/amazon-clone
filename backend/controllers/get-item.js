const get_item = async (req, res) => {
    try  {
        const {itemId} = req.body
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`)
        res.json({item : `${response}`})
          }
    catch (err) {
        console.log(err)
        res.send(err)
    } 
}

module.exports = {get_item}