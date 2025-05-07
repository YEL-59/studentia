import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // ShadCN button
import { UploadCloud } from "lucide-react";

const PdfReader = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

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

  return (
    <div className="bg-[#1b1b2f] text-white p-6 rounded-xl max-w-md mx-auto mt-10 shadow-lg border border-purple-500">
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

      {fileUrl && (
        <div className="rounded-lg overflow-hidden mb-4 border border-gray-700 max-h-[500px]">
          <iframe
            src={fileUrl}
            title="PDF Viewer"
            width="100%"
            height="500px"
            className="w-full"
          ></iframe>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          className="bg-gray-800 text-white hover:bg-gray-700"
          onClick={() => {
            setFile(null);
            setFileUrl(null);
          }}
        >
          Cancel
        </Button>
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white"
          disabled={!file}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default PdfReader;
