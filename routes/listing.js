const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage}); 

// Index Route
router.route("/")
    .get(
        // Index Route
        wrapAsync(listingController.index)
    )
    .post(
        isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing)
    )
    .post(  (req, res) => {
        // Create Route
        res.send(req.file);
    });

// New Route
router.get("/new", isLoggedIn, listingController.renderNewFrom);

// Show, Update, and Delete Routes
router.route("/:id")
    .get(
        // Show Route
        wrapAsync(listingController.showListing)
    )
    .put(
        // Update Route
        isLoggedIn, 
        isOwner,
        upload.single('listing[image]'), 
        validateListing, 
        wrapAsync(listingController.updateListing)
    )
    .delete(
        // Delete Route
        isLoggedIn, 
        isOwner,  
        wrapAsync(listingController.destroyListing)
    );

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
