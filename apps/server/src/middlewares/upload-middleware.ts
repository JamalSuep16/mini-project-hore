import multer from "multer";
<<<<<<< HEAD
import path from "node:path";

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename(req, file, cb) {
      const uniquePrefix = `img-${Date.now()}`;
      cb(null, uniquePrefix + path.extname(file.originalname));
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedtypes = /jpeg|jpg|png|webp|avif/;
    const extname = allowedtypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedtypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error("Images only"));
    }
  },
  limits: { fileSize: 5000000 },
});
=======
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Images only!"));
    }
  },
});

export default upload;
>>>>>>> main
