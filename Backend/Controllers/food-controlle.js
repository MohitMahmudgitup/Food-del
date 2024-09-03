import foodModel from "../Models/food-model.js";
import fs from "fs";

// Add food item
const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;

    const food = new foodModel({
        name,
        description,
        price,
        image: req.file.filename,
        category,
    });

    try {
        await food.save();
        res.json({
            message: "Food Added.",
            success: true,
            error: false,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error adding food item.",
            success: false,
            error: true,
        });
    }
};

// Get all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            data: foods,
            success: true,
            error: false,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching food items.",
            success: false,
            error: true,
        });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body._id);
        if (!food) {
            return res.status(404).json({
                message: "Food item not found.",
                success: false,
                error: true,
            });
        }

        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.log(err);
        });

        await foodModel.findByIdAndDelete(req.body._id);

        res.json({
            message: "Food item removed.",
            success: true,
            error: false,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error removing food item.",
            success: false,
            error: true,
        });
    }
};

export {
    addFood,
    listFood,
    removeFood,
};
