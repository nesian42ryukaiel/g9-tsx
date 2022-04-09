// import React from "react";

type ArticleProps = {
  title: string;
  image: string;
  text: string;
  location: string;
};

function Article({ title, image, text, location }: ArticleProps) {
  return (
    <article className={`Article`}>
      {location === "Main__articles" || location === "main__articles" ? (
        <div className="Article__title">{title}</div>
      ) : (
        <></>
      )}
      <div className={`Article__imageBox ${location}--padding`}>
        <img
          src={image}
          className={`Article__image Article__image--blur ${location}`}
          alt="the main dish"
        />
      </div>
      {location === "Main__articles" || location === "main__articles" ? (
        <div className="article__text">{text}</div>
      ) : (
        <></>
      )}
    </article>
  );
}

export default Article;
