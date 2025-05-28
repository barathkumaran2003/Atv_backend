const Contact = require("../models/Contact");
const News = require("../models/News");
const Review = require("../models/Review");
const Shop = require("../models/Shop");
const User = require("../models/User");

const signin = async (req, res) => {
  const { username, password, email, phonenumber } = req.body;

  try {
    // Optional: check for existing user
    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" }); // ✅ must return JSON
    }
    else if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" }); // ✅ must return JSON
    }

    const user = new User({ username, password, email, phonenumber });
    await user.save();

    return res.status(201).json({ message: "User signed in successfully" }); // ✅ must return JSON
  } catch (error) {
    console.error("Signin Error:", error.message);
    return res.status(500).json({ message: "Server Error" }); // ✅ must return JSON
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userpass = await User.findOne({ password });
    // console.log(userpass);
    const signinUsername = await User.findOne({ username });
    // console.log(signinUsername);
    if (userpass && signinUsername) {
      return res.status(200).json({ message: "User logged in successfully", name :`${username}` }); // ✅ must return JSON
    }
    else {
      return res.status(400).json({ message: "Wrong user name or password" }); // ✅ must return JSON
    }
  }
  catch (error) {
    console.error("Signin Error:", error.message);
    return res.status(500).json({ message: "Server Error" }); // ✅ must return JSON
  }
}

const getsignin= async (req, res) => {
try {
    const contacts = await User.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }}

const getLogin= async(req,res)=>{
  try{
    // console.log(req.query);
    const name=req.query;
    const contacts = await User.findOne(name);
    res.json(contacts);
  }catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }
  
}

const news=async(req,res)=>
{
  try{
    const {img, ndate, heading, content}=req.body;
    const news= new News({img, ndate, heading, content})
    await news.save();
    return res.status(201).json({ 
      message: "User signed in successfully", 
      img:`${img}`,
      ndate:`${ndate}`,
      heading:`${heading}`,
      content:`${content}`,
    }); // ✅ must return JSON

  }
  catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }
}

const getnews= async (req, res) => {
try {
    const newsdata = await News.find();
    res.json(newsdata);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }}


const shope=async(req,res)=>{
  try{
    const {imgurl, product, sprice}=req.body;
    const shop= new Shop({imgurl, product, sprice})
    await shop.save();
    return res.status(201).json({ 
      message: "User signed in successfully", 
      imgurl:`${imgurl}`,
      product:`${product}`,
      sprice:`${sprice}`,
    });
  }
  catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }
}

const getshop= async (req, res) => {
  try {
      const shopdata = await Shop.find();
      res.json(shopdata);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching contacts', error: err });
    }}


const contact= async (req, res) => {
  try{
    const { firstName, lastName, email, phone, message } = req.body;
    const contact = new Contact({ firstName, lastName, email, phone, message });
    await contact.save();
    return res.status(201).json({ 
      message: "Contact saved successfully", 
    });
  }
  catch (err) {
    res.status(500).json({ message: 'Error saving contact', error: err });
  }
}

const shopedit= async (req, res) => {
  try {
    const product = req.query; // Assuming product ID is passed as a query parameter
    const shopData = await Shop.findOne(product);
    res.json(shopData);     
  }
  catch (err) {
    res.status(500).json({ message: 'Error fetching shop data', error: err });
  }
}

const editshopedit = async (req, res) => {
  try {
    const { imgurl, product, sprice } = req.body;
    const productid = req.query; // Assuming product ID is passed as a query parameter
    const updatedShop = await Shop.findOneAndUpdate(productid, { imgurl, product, sprice }, { new: true });
    res.json(updatedShop);
  } catch (err) {
    res.status(500).json({ message: 'Error updating shop data', error: err });
  }
}

const deleteShop = async (req, res) => {
  try {
    const productid = req.query; // Assuming product ID is passed as a query parameter
    const deletedShop = await Shop.findOneAndDelete(productid);
    if (!deletedShop) {
      return res.status(404).json({ message: 'Shop not found' });
    }
    res.json({ message: 'Shop deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting shop', error: err });
  }
}

const review=async(req,res)=>
{
    try{
        const { name, email, heading,  message} = req.body;
    const review = new Review({ name, email, heading,  message});
    await review.save();
    return res.status(201).json({ 
      message: "Contact saved successfully", 
    });
    }
    catch(err)
    {
      res.status(500).json({message:'Error deleting shop', error:err});
    }
}

const getreview= async (req, res) => {
  try {
      const reviewdata = await Review.find();
      res.json(reviewdata);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching contacts', error: err });
    }}

module.exports = { signin, login, getLogin, getsignin, news, getnews, shope, getshop,contact, shopedit, editshopedit, deleteShop, review, getreview };


