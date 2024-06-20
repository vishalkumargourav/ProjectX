import React from "react";

import Card from "@material-ui/core/Card";

export const SearchPhotosForm = () => {
  return (
    <div className={classes.root}>
      <Card className={this.props.cardName}>
        {(this.state.mainState == "initial" && this.renderInitialState()) ||
          (this.state.mainState == "uploaded" && this.renderUploadedState())}
      </Card>
    </div>
  );
};
