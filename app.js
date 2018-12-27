var express = require("express")
var app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/personalWebsite", { useNewUrlParser: true });

//Schema Set-up

var contactSchema = new mongoose.Schema({
    email: String,
    message: String
})

//Schema Set-up end

var Contact = mongoose.model("Contact", contactSchema)

// Contact.create({
//     email: "paulaaron0@gmail.com",
//     message: "You have a very cool website!"

// }, function(err, contact){
//     if (err) {
//         console.log(err);
//         console.log("There was an error!");
//     } else {
//         console.log(contact);
//         console.log("WE HAVE CREATED A MESSAGE!");

//     }
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/public', express.static('public'));


app.get("/", function (req, res) {
    res.render("index.ejs")
})
app.get("/contact", function (req, res) {
    res.render("contact.ejs")
})

app.post("/contact", function(req, res) {
    var email = req.body.email;
    var message =req.body.message;
    var newContact = {email:email, message:message}
    Contact.create({
        email: email,
        message: message

    }, function (err, contact) {
        if (err) {
            console.log(err);
            console.log("There was an error!");
        } else {
            console.log(contact);
            console.log("WE HAVE CREATED A MESSAGE!");

        }
    })

    res.redirect("/")
})


app.get("/research", function (req, res) {
    res.render("research.ejs")
})



app.listen("3000", function () {
    console.log("The server is connected!");
    
})