"use client";
import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cover || !pdf) {
      alert("Please select files");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("cover", cover);
    formData.append("pdf", pdf);

    const res = await fetch("/.netlify/functions/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    alert("Uploaded!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Upload Story</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setCover(e.target.files?.[0] || null)}
        />

        <input
          type="file"
          onChange={(e) => setPdf(e.target.files?.[0] || null)}
        />

        <button className="bg-black text-white px-4 py-2">
          Upload
        </button>
      </form>
    </div>
  );
}