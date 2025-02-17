<<<<<<< HEAD
// import express from "express";
// import {
//   createCategory,
//   getAllCategory,
// } from "../controllers/category.controller";
// import { roleGuard, verifyToken } from "../middlewares/auth-middleware";

// const router = express.Router();

// // router
// //   .route("/")
// //   .get(verifyToken, roleGuard("ADMIN"), getAllCategory)
// //   .post(verifyToken, roleGuard("AUTHOR"), createCategory);

// router.route("/").get(getAllCategory).post(createCategory);

// export default router;
=======
import express from "express";
import {
  getSingleCategories,
  getAllCategories,
} from "../controllers/categories-controller";
// import { roleGuard, verifyToken } from "../middlewares/auth-middleware"

const router = express.Router();

// router
//   .route("/")
//   .get(verifyToken, roleGuard("ADMIN"), getAllCategory)
//   .post(verifyToken, roleGuard("AUTHOR"), createCategory);

router.route("/").get(getAllCategories);
router.route("/:id").get(getSingleCategories);

// post(createCategory);

export default router;
>>>>>>> main
