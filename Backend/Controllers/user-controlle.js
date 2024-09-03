import userModel from "../Models/user-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from "validator";

// Function to create a JWT token
const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validate input
    if (!username) {
      return res.status(200).json({
        message: 'Username is required.',
        success: false,
        error: true
      });
    }

    if (!validator.isAlphanumeric(username)) {
      return res.status(200).json({
        message: 'Username can only contain letters and numbers.',
        success: false,
        error: true
      });
    }

    if (username.charAt(0) !== username.charAt(0).toUpperCase()) {
      return res.status(200).json({
        message: 'Username must start with a capital letter.',
        success: false,
        error: true
      });
    }

    if (!/^[A-Za-z]/.test(username)) {
      return res.status(200).json({
        message: 'Username must start with a letter.',
        success: false,
        error: true
      });
    }

    if (!email) {
      return res.status(200).json({
        message: 'Email is required.',
        success: false,
        error: true
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(200).json({
        message: 'Please enter a valid email.',
        success: false,
        error: true
      });
    }

    if (!password) {
      return res.status(200).json({
        message: 'Password is required.',
        success: false,
        error: true
      });
    }

    if (!validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      return res.status(200).json({
        message: 'Password must be at least 8 characters long, and include at least one uppercase letter, one number, and one special character.',
        success: false,
        error: true
      });
    }

    // Check if user already exists
    
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(200).json({
        message: 'User already exists.',
        success: false,
        error: true
      });
    }

    // Hashing password with bcrypt
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    // Create a new user instance
    user = new userModel({
      username,
      email,
      password: hash,
    });

    // Save the user
    await user.save();

    // Generate JWT
    const token = createToken(user);

    res.status(201).json({
      token,
      success: true,
      message: "Your registration was successfully completed.",
      error: false
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


//  login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Validate input
      if (!validator.isEmail(email)) {
        return res.status(200).json({
          message: 'Invalid email format.',
          success: false,
          error: true
        });
      }
  
      if (validator.isEmpty(password)) {
        return res.status(200).json({
          message: 'Password cannot be empty.',
          success: false,
          error: true
        });
      }
  
      // Check if the user exists
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(200).json({ message: 'Invalid credentials', success: false, error: true });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(200).json({ message: 'Invalid credentials', success: false, error: true });
      }
  
      // Generate JWT
      const token = createToken(user);
  
      res.json({ token, success: true , message:"You have permission." });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }

  // const editUser = async (req, res) => {
  //   const { userId } = req.params;
  //   let { username, email, password } = req.body;
  
  //   try {
  //     // Check if the first character of the username is capitalized
  //     if (username && username.charAt(0) !== username.charAt(0).toUpperCase()) {
  //       return res.status(400).json({
  //         message: 'Username must start with a capital letter.',
  //         success: false,
  //         error: true
  //       });
  //     }
  
  //     // Validate input
  //     if (username && !validator.isAlphanumeric(username)) {
  //       return res.status(400).json({
  //         message: 'Username can only contain letters and numbers.',
  //         success: false,
  //         error: true
  //       });
  //     }
  
  //     if (email && !validator.isEmail(email)) {
  //       return res.status(400).json({
  //         message: 'Please enter a valid email.',
  //         success: false,
  //         error: true
  //       });
  //     }
  
  //     if (password && !validator.isStrongPassword(password, {
  //       minLength: 8,
  //       minLowercase: 1,
  //       minUppercase: 1,
  //       minNumbers: 1,
  //     })) {
  //       return res.status(400).json({
  //         message: 'Password must be at least 8 characters long, and include at least one uppercase letter, and one number.',
  //         success: false,
  //         error: true
  //       });
  //     }
  
  //     // Find the user by ID
  //     let user = await userModel.findById(userId);
  //     if (!user) {
  //       return res.status(404).json({
  //         message: 'User not found.',
  //         success: false,
  //         error: true
  //       });
  //     }
  
  //     // Update the user's information
  //     if (username) user.username = username;
  //     if (email) user.email = email;
  
  //     if (password) {
  //       // Hash the new password
  //       const salt = await bcrypt.genSalt(12);
  //       user.password = await bcrypt.hash(password, salt);
  //     }
  
  //     // Save the updated user information
  //     await user.save();
  
  //     res.status(200).json({
  //       message: 'User information updated successfully.',
  //       success: true,
  //       error: false
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server error');
  //   }
  // };

  // const deleteUser = async (req, res) => {
  //   const { userId } = req.params;
  //   console.log(userId)
  
  //   try {
  //     // Find the user by ID
  //     const user = await userModel.findById(userId);
  //     if (!user) {
  //       return res.status(404).json({
  //         message: 'User not found.',
  //         success: false,
  //         error: true
  //       });
  //     }
  
  //     // Delete the user
  //     await userModel.findByIdAndDelete(userId);
  
  //     res.status(200).json({
  //       message: 'User deleted successfully.',
  //       success: true,
  //       error: false
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server error');
  //   }
  // };
  
  

export {
  loginUser,
  registerUser,
  // editUser,
  // deleteUser
}
