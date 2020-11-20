import React from "react";
import { ListLoader, EditorLoader, DetailsLoader } from "./Loader";

export default {
    title: "General/Loader",
};
export const listloader = () => <ListLoader />;
export const editorloader = () => <EditorLoader />;
export const detailsloader = () => <DetailsLoader />;