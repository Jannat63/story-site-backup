"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalStories, setTotalStories] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      window.location.href = "/admin";
    }
  }, []);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1ewUvwnlwo4nF2jw_vI11AXKDC6BblruO7tSvrMGY9Kw/Sheet1"
    )
      .then((res) => res.json())
      .then((data) => {
        const published = data.filter(
          (s: any) => s.status === "published"
        );
        setTotalStories(published.length);
      });
  }, []);

  const openUploadWidget = () => {
    if (!(window as any).cloudinary) {
      alert("Cloudinary not loaded");
      return;
    }

    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "dh3ozj96b",
        uploadPreset: "unsigned_upload",
      },
      (error: any, result: any) => {
        if (!error && result.event === "success") {
          setCoverUrl(result.info.secure_url);
        }
      }
    );

    widget.open();
  };

  const handlePublish = async () => {
    if (loading) return;

    if (!title) {
      alert("Title required");
      return;
    }

    setLoading(true);

    const data = {
      title,
      meta_title: metaTitle,
      meta_desc: metaDesc,
      cover_url: coverUrl,
      pdf_url: pdfUrl,
      status: "published",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz12cVr84UpmK3j12zayvDncD-eB79xW_G8-vzdjcUo5lHbhILpY9VKBEBp9wHmQM0/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      alert("✅ Published!");

      setTitle("");
      setMetaTitle("");
      setMetaDesc("");
      setCoverUrl("");
      setPdfUrl("");

      setTotalStories((prev) => prev + 1);

    } catch {
      alert("❌ Failed");
    }

    setLoading(false);
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-white border-b md:border-r p-5 md:p-6 flex md:flex-col justify-between md:min-h-screen">

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-10">
            Ahsan's E-Book
          </h2>

          <nav className="flex md:flex-col gap-2 md:space-y-3 text-sm overflow-x-auto">
            <a className="whitespace-nowrap px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
              Give Love Be Happy
            </a>
          </nav>
        </div>

        <div className="hidden md:block border-t pt-6">
          <div className="flex items-center gap-3">
            <img src="/author.webp" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Ahsan Jannat</p>
              <p className="text-xs text-gray-500">Story Writer</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} Ahsan's Story
          </p>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 px-4 sm:px-6 py-6 md:py-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-xl sm:text-2xl font-bold">
            Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full sm:w-auto"
          >
            Logout
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT FORM */}
          <div className="md:col-span-2 bg-white p-5 sm:p-6 rounded-2xl shadow space-y-5">

            <h2 className="text-lg font-semibold">
              Create Story
            </h2>

            <input
              type="text"
              placeholder="Story Title"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Meta Title (optional)"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
            />

            <textarea
              placeholder="Meta Description (optional)"
              className="w-full border p-3 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-black/20"
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
            />

            <div className="space-y-3">
              <button
                onClick={openUploadWidget}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
              >
                Upload Cover (Optional)
              </button>

              <input
                type="text"
                placeholder="Or paste cover URL"
                className="w-full border p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Paste Google Drive PDF link"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
            />

            <button
              onClick={handlePublish}
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg mt-2 disabled:opacity-50 hover:opacity-90 transition"
            >
              {loading ? "Publishing..." : "Publish Story"}
            </button>

          </div>

          {/* RIGHT STATS */}
          <div className="space-y-5">

            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">
                Total Published
              </h3>
              <p className="text-2xl font-bold mt-2">
                {totalStories}
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">
                Status
              </h3>
              <p className="mt-2 text-sm">
                {title ? "Editing" : "Idle"}
              </p>
            </div>

            <div className="bg-gradient-to-r from-black to-gray-700 text-white p-5 sm:p-6 rounded-2xl shadow">
              <h3 className="text-sm opacity-80">
                System
              </h3>
              <p className="mt-2 text-lg font-semibold">
                Live & Connected
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}