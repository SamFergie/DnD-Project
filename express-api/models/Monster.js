const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Monster = new Schema(
    {
        owner: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        predicted_cr: {
            type: Number,
            required: true
        },
        hp: {
            type: Number,
            required: true
        },
        ac: {
            type: Number,
            required: true
        },
        base_speed: {
            type: Number,
            required: true
        },
        fly_speed: {
            type: Number,
            required: true
        },
        burrow_speed: {
            type: Number,
            required: true
        },
        swim_speed: {
            type: Number,
            required: true
        },
        climb_speed: {
            type: Number,
            required: true
        },
        STR: {
            type: Number,
            required: true
        },
        DEX: {
            type: Number,
            required: true
        },
        CON: {
            type: Number,
            required: true
        },
        INT: {
            type: Number,
            required: true
        },
        WIS: {
            type: Number,
            required: true
        },
        CHA: {
            type: Number,
            required: true
        },
        passive_number: {
            type: Number,
            required: true
        },
        action_number: {
            type: Number,
            required: true
        },
        max_damage: {
            type: Number,
            required: true
        },
        max_bonus: {
            type: Number,
            required: true
        },
        legendary_number: {
            type: Number,
            required: true
        },        
        immunity_number: {
            type: Number,
            required: true
        },        
        resistance_number: {
            type: Number,
            required: true
        },
    }
);

module.exports = mongoose.model('Monster', Monster);