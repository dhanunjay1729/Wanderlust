const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review");

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) { 
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // Save the URL the user was trying to access
        req.flash("error", "You must be logged in to create a listing");
        return res.redirect("/login"); // Stop further code execution
    }
    next(); // Continue to the next middleware or route handler
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        // Clear the redirectUrl after using it if you want to prevent further use
        delete req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    if (!id) {
        req.flash("error", "Invalid listing ID");
        return res.redirect("/listings");
    }

    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    if (!res.locals.currUser || !listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to edit this listing, since you are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }

    next(); 
};

module.exports.isReviewOwner = async (req, res, next) => {
    let {id,  reviewId } = req.params;
    let review = await Review.findById(reviewId);

    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }

    next(); 
};
