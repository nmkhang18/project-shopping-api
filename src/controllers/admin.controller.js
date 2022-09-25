const { pool } = require('../configs/connectDB')
const dateTime = require('../services/getDateTime')

// const users = [fullname, email, phone_number, address, password, role_id, created_at, updated_at, deleted]

//users
module.exports.getAllUsers = async (req, res) => {
    try {
        const [data] = await pool.execute('select fullname, email, phone_number, address, created_at, updated_at, deleted from user')
        console.log('Load all users successfull.')
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}
//products
module.exports.createProduct = async (req, res) => {
    let data = req.body
    console.log(data)
    try {
        await pool.execute(`insert into product(category_id, title, price, discount, image, description, supplier_id, shipping, featured, created_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [req.body.category_id, req.body.title, req.body.price, req.body.discount, req.body.image, req.body.description, req.body.supplier_id, req.body.shipping, req.body.featured, dateTime.getDateTime()])
        console.log('Create product successfull')
        res.json({ thongbao: "Successfull" })
    }
    catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`)
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}

module.exports.changeProductInfo = async (req, res) => {
    try {
        await pool.execute('update product set category_id = ?, title = ?, price = ?, discount = ?, image = ?, description = ?, shipping = ?, featured = ?, updated_at = ? where id = ?', [req.body.category_id, req.body.title, req.body.price, req.body.discount, req.body.image, req.body.description, req.body.featured, dateTime.getDateTime(), req.params.id])
        console.log(`Update product(${req.params.id}) successfull at ${dateTime.getDateTime()}`)
        res.json({ thongbao: "Successfull" });
    } catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}
//categories
module.exports.createCategory = async (req, res) => {

    try {
        await pool.execute(`insert into category(name) values (?)`, [req.body.name])
        console.log('Create category successfull')
        res.json({ thongbao: "Successfull" })
    }
    catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`)
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}
module.exports.deleteCategory = async (req, res) => {
    try {
        const [data] = await pool.execute('delete from category where id = ?', [req.params.id])
        console.log(`Delete category(${id}) successfull`);
        res.json({ thongbao: "Successfull" });
    } catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}
//supplier
module.exports.createSupplier = async (req, res) => {

    try {
        await pool.execute(`insert into supplier(name) values (?)`, [req.body.name])
        console.log('Create category successfull')
        res.json({ thongbao: "Successfull" })
    }
    catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`)
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}
module.exports.deleteSupplier = async (req, res) => {
    try {
        const [data] = await pool.execute('delete from supplier where id = ?', [req.params.id])
        console.log(`Delete category(${id}) successfull`);
        res.json({ thongbao: "Successfull" });
    } catch (error) {
        console.log(`Unsuccesfull, error: ${error.message}`);
        res.json({
            thongbao: "Unsuccessfull",
            error: error.message
        })
    }
}
