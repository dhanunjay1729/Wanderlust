const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id; // Set author to the ID of the logged-in user
    await newReview.save();
    
    listing.reviews.push(newReview._id); // Push the ID of the new review to the listing's reviews
    await listing.save();
    
    req.flash("success", "New Review Created!");
    console.log("New review saved");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
}