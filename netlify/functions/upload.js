import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    try {
      const coverUpload = await cloudinary.uploader.upload(
        files.cover.filepath
      );

      const pdfUpload = await cloudinary.uploader.upload(
        files.pdf.filepath,
        { resource_type: "raw" }
      );

      return res.status(200).json({
        title: fields.title,
        cover_url: coverUpload.secure_url,
        pdf_url: pdfUpload.secure_url,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  });
};