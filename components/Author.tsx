import React, { FC } from "react";
import { Author } from "./types";

type Props = {
  author: Author;
};
const Author: FC<Props> = ({ author }) => {
  return <div>{author.name}</div>;
};

export default Author;
