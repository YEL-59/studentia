import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // ShadCN
import { UploadCloud, ZoomIn, ZoomOut, X } from "lucide-react";

const PdfReader = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [zoom, setZoom] = useState(1);

  const onFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (
      uploadedFile?.type === "application/pdf" &&
      uploadedFile.size < 25 * 1024 * 1024
    ) {
      const url = URL.createObjectURL(uploadedFile);
      setFile(uploadedFile);
      setFileUrl(url);
    } else {
      alert("Only PDF files under 25MB are allowed.");
    }
  };

  useEffect(() => {
    return () => {
      if (fileUrl) URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));
  const reset = () => {
    setFile(null);
    setFileUrl(null);
    setZoom(1);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 p-4">
      {!file ? (
        <div className="bg-[#1b1b2f] text-white p-6 rounded-xl shadow-lg border border-purple-500">
          <h2 className="text-lg font-semibold mb-1">Upload Documents</h2>
          <p className="text-sm text-gray-400 mb-4">
            Please upload a PDF file under 25 MB.
          </p>

          <div className="border-2 border-dashed border-purple-600 rounded-xl p-6 flex flex-col items-center justify-center text-center mb-4 bg-gradient-to-r from-[#2d2d44] to-[#3f3f5e]">
            <UploadCloud className="w-6 h-6 mb-2 text-purple-400" />
            <p className="text-sm">Drop file or browse</p>
            <p className="text-xs text-gray-400">
              Format: .pdf & Max file size: 25 MB
            </p>
            <label className="mt-3">
              <input
                type="file"
                accept="application/pdf"
                onChange={onFileChange}
                className="hidden"
              />
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-800"
                asChild
              >
                <span>Browse Files</span>
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <div className="relative bg-black border border-gray-700 rounded-lg overflow-hidden">
          {/* Zoom + Control Bar */}
          <div className="flex justify-between items-center p-4 bg-[#1b1b2f] text-white border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleZoomOut}>
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-300">
                Zoom: {(zoom * 100).toFixed(0)}%
              </span>
              <Button variant="outline" size="sm" onClick={handleZoomIn}>
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-sm text-gray-400 italic truncate max-w-xs">
              {file?.name}
            </div>

            <Button
              variant="destructive"
              size="sm"
              onClick={reset}
              className="flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Remove
            </Button>
          </div>

          {/* PDF iframe */}
          <div className="w-full overflow-auto bg-black">
            <iframe
              src={fileUrl}
              title="PDF Viewer"
              width="100%"
              height="800px"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top center",
              }}
              className="transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfReader;
