const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => { // Pass next to wrapAsync function
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err); // Properly handle the error by passing it to next
            }
            req.flash("success", "Welcome to WanderLust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login =  async (req, res) => {
    // Successful login redirects to the listings page or wherever you prefer
    req.flash("success", "Welcome back to WanderLust!");
    res.redirect(res.locals.redirectUrl || "/listings"); 
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err); // Properly handle the error by passing it to next
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
}
