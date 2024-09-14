import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const Upload = () => {
  // Initialize Supabase client
  const supabaseUrl = `https://iaklxjssmhryvmwkbinw.supabase.co`;
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlha2x4anNzbWhyeXZtd2tiaW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMDY1MDUsImV4cCI6MjAyNTY4MjUwNX0.EIme_7eH-NgqQBatNVtFRf4ANhe1oWAlF8qfGmS9FNA';

  // Create Supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [signedUrl, setSignedUrl] = useState('');


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    setLoading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    try {
      // Upload file to Supabase Storage bucket
      let { data, error } = await supabase.storage
        .from('prodImgs') // Replace with your actual bucket name
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading file:', error);
      } else {
        // Get the signed URL of the uploaded file (valid for 1 hour, i.e. 3600 seconds)
        const { data: signedData, error: signedUrlError } = await supabase.storage
          .from('prodImgs') // Replace with your actual bucket name
          .createSignedUrl(filePath, 3600);  // URL valid for 1 hour

        if (signedUrlError) {
          console.error('Error generating signed URL:', signedUrlError);
        } else {
          setSignedUrl(signedData.signedUrl);
          alert('File uploaded and signed URL generated successfully!');
        }
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }

    setLoading(false);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload File'}
      </button>
      {signedUrl && (
        <div>
          <p>File uploaded successfully. URL: </p>
          <a href={signedUrl} target="_blank" rel="noopener noreferrer">
            {signedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Upload;
