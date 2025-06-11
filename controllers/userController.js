import User from "../models/User.js";
import bcrypt from "bcryptjs";

//  handle user registration
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    //  Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    //  Create new user with hashed password
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser }); // Respond with success and the newly created user
  } catch (err) {
    res.status(500).json({ message: "Server error" }); // Handle server errors
  }
};

// Controller to handle user login
export const loginUser = async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from request

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    //  Compare password with the hashed one in the DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
