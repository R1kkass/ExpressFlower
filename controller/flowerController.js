const { json } = require("sequelize");
const Flower = require("../migrations/Flower");
const ApiError = require("../error/ApiError");

class FlowerController {
    async getAllFlower(req, res) {
        const {name=""} = req.query
        console.log(name);
        const flower = await Flower.find({ name: {$regex: '.*' + name + '.*' }})
        console.log(flower[0]);
        return res.json({flower})
    }

    async createFlower(req, res) {
        try{
            console.log(req.body);
            const {name, price, image, description, category, sale=0, status } = req.body
        
            const flower = await Flower.create({
                name, price, sale, description, image, category, status
            })
    
            return res.json({flower})
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async deleteFlower(req, res) {
        const { _id } = req.query;
        const flower = await Pizza.deleteOne({ _id });
        return res.json({flower})
    }

    async updateFlower(res,req) {
        const {_id} = req.query
        const {name, price, image, description, category, sale } = req.body
        
        const flower = await Flower.updateOne({_id}, {
            name, price, sale, description, image, category
        })

        return res.json({flower})
    }
}

module.exports = new FlowerController()