import multer from "multer";
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
