import React from "react";
import "./index.css";

export interface IArticleProps {
  children: React.ReactNode;
}

export default function Article({ children }: IArticleProps) {
  return <div className="article-wrapper">{children}</div>;
}
