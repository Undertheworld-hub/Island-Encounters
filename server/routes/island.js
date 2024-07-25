const express = require('express');
const Island = require('../models/island');
const auth = require('../auth');

const router = express.Router();

// Route pour obtenir toutes les îles
router.get('/', auth, async (req, res) => {
    try {
        const islands = await Island.find();
        res.json(islands);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour obtenir les îles d'un utilisateur spécifique
router.get('/user', auth, async (req, res) => {
    try {
        const islands = await Island.find({ userId: req.user.userId });
        res.json(islands);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer une île
router.post('/', auth, async (req, res) => {
    const island = new Island({
        userId: req.user.userId,
        position: req.body.position,
        customization: req.body.customization
    });
    try {
        const newIsland = await island.save();
        res.status(201).json(newIsland);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
