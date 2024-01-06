import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.service.js";

/* 
Step to register a user into db
  - Take all necessary information from frontend
  - validation - not empty
  - Check if user already exist or not
  - check for images, check for avatar,
  - upload them to cloudinary, avatar
  - create user object - create entry in db
  - remove password and refresh token field from response
  - check for user creation
  - return res




  // - verify email then check it by cross checking ❌
  // - upload image
  // - send it to db after validation
*/

const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    email,
    fullName,
    avatar,
    coverImage,
    watchHistory,
    password,
    refreshToken,
  } = req.body;

  // check if any value is empty or not
  if (
    [
      username,
      email,
      fullName,
      avatar,
      coverImage,
      watchHistory,
      password,
      refreshToken,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists!");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coveImage[0]?.path;

  if (!avatarLocalPath) throw new ApiError(400, "Avatar file is required");

  const avatarUploadOnCloud = await uploadOnCloudinary(avatarLocalPath);
  const coverImageUploadOnCloud = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatarUploadOnCloud) throw new ApiError(400, "Avatar file is required");

  const user = await User.create({
    fullName,
    avatar: avatarUploadOnCloud.url,
    coverImage: coverImageUploadOnCloud?.url || "",
    username: username.toLowercase(),
    email,
    password,
  });

  const findUserByCreationId = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!findUserByCreationId) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, findUserByCreationId, "User registered successfully")
    );
});

export { registerUser };
