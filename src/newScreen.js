import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { Controller, useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { createPost } from "./graphql/mutations";
import "./newScreen.css";

const NewScreen = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.graphql(graphqlOperation(createPost, { input: data }));
      console.log("success!!!")
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div class="card">
        <h1>新規投稿</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="タイトル" {...field} />}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="writer"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="著者" {...field} />}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="カテゴリ" {...field} />}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="date"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="読了日" {...field} />}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="url"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="URL" {...field} />}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="image"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="画像URL" {...field} />}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="概要"
                  multiline
                  rows={4}
                  rowsMax={6}
                  {...field}
                />
              )}
            />
          </div>
          <br />
          <div className="form">
            <Controller
              name="star"
              control={control}
              defaultValue={3}
              rules={{ required: true }}
              render={(props) => <Rating name="star" />}
            />{" "}
          </div>
          <br />
          <Button size="large" type="submit" variant="outlined">
            投稿
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withAuthenticator(NewScreen);
