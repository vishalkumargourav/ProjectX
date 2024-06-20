import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const UploadPhotosForm = () => {
  const [selectedImage, setselectedImage] = useState("./logo.jpg");
  const [mainState, setmainState] = useState("initial");
  const [imageUploaded, setimageUploaded] = useState(0)

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setselectedImage(reader.result);
    }.bind(this);
    console.log("File selected is:"+ url); // Would see a path?

    setmainState("uploaded");
    setselectedImage(event.target.files[0]);
    setimageUploaded(1);
  };

  const renderInitialState = () => {
    console.log("Rendering Initial State");
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img width="100%" src={selectedImage} />
        </Grid>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Select Image
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  };

  const renderUploadedState = () => {
    console.log("Rendering Final State");

    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            width="100%"
            src={selectedImage}
          />
        </Grid>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Select Image
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  };

  return (
    <div>
      <Card>
        {(mainState == "initial" && renderInitialState()) ||
          (mainState == "uploaded" && renderUploadedState())}
      </Card>
    </div>
  );
};
