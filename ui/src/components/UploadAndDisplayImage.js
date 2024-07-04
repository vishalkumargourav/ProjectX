import React, { useState } from "react";

// Define a functional component named UploadAndDisplayImage
export const UploadAndDisplayImage = () => {
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Return the JSX for rendering
  return (
    <div>
      {/* Header */}
      <h1>Upload and Display Image</h1>
      <h3>using React Hooks</h3>

      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button>Upload Image</button>
        </div>
      )}

      <br />

      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log("Selected Image is : ", event.target.files[0]); // Log the selected file

          setSelectedImage(event.target.files[0]); // Update the state with the selected file
        }}
      />
    </div>
  );
};