const { pool } = require('../configs/connectDB')

module.exports.getAll = async (req, res) => {
    try {
        const [data] = await pool.execute('SELECT id, title, price, image, description, category_id, supplier_id, shipping, featured FROM product')
        console.log(`Load products successfull`);
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
    }
}
module.exports.getById = async (req, res) => {
    try {
        const color = []
        const [data] = await pool.execute('SELECT id, title, price, image, description, category_id, supplier_id, shipping, featured FROM product where id = ?', [req.params.id])
        const [colorsList] = await pool.execute('SELECT color_code FROM product_color where product_id = ?', [req.params.id])
        console.log(`Load products successfull`);
        for (let i = 0; i < colorsList.length; i++) {
            color.push(colorsList[i].color_code)
        }
        console.log(color);
        data[0]['colors'] = color
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
    }
}