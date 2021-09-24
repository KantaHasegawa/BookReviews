import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { Controller, useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { updatePost, deletePost } from "./graphql/mutations";
import { getPost } from './graphql/queries'
import "./newScreen.css";
import { useParams } from "react-router";

const EditScreen = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const [post, setPost] = useState({});

    useEffect(() => {
      fetchPost();
    }, []);

    async function fetchPost() {
      try {
        const postData = await API.graphql(graphqlOperation(getPost, { id: id }));
        const postdata = postData.data.getPost;
        console.log(postdata)
        setPost(postdata);
        setValue("id", postdata.id);
        setValue("name", postdata.name);
        setValue("writer", postdata.writer);
        setValue("category", postdata.category);
        setValue("date", postdata.date);
        setValue("url", postdata.url);
        setValue("image", postdata.image);
        setValue("description", postdata.description);
        setValue("star", postdata.star);
      } catch (err) {
        console.log("error fetching post");
      }
    }

  const onSubmit = async (data) => {
    try {
      await API.graphql(graphqlOperation(updatePost, { input: data }));
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const input = {id: id}
    try {
      await API.graphql(graphqlOperation(deletePost, { input: input }));
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div class="card">
        <h1>編集</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <Controller
              name="id"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField type="hidden"  {...field} />}
            />
          </div>
          <div className="form">
            <Controller
              name="name"
              control={control}
              defaultValue={post.name}
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
              rules={{ required: true }}
              render={(props) => <Rating name="star" />}
            />{" "}
          </div>
          <br />
          <Button size="large" type="submit" variant="outlined">
            編集
          </Button>
        </form>
        <Button
          onClick={handleDelete}
          size="large" variant="outlined"
          Style="margin: 0.5rem auto;"
        >
          削除
        </Button>
      </div>
    </div>
  );
};

export default withAuthenticator(EditScreen);
