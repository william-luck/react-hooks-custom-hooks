import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";
import { makeEmojiList } from "../utils";

function ArticlePage() {
  // fetch data for a post
  const { id } = useParams();

  const url = `http://localhost:4000/posts/${id}`;
  const {data: post, isLoaded} = useQuery(url)

  // set the document title
  const pageTitle = post ? `Underreacted | ${post.title}` : "Underreacted";
  useDocumentTitle(pageTitle)

  if (!isLoaded) return <h3>Loading...</h3>;

  const { minutes, title, date, preview } = post;
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticlePage;
