import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export default function textRender<T extends Document>(text: T) {
    if (!text || typeof text !== "object") return null;  // Ensure 'text' is an object

    try {
        return documentToReactComponents(text);
    } catch (error) {
        console.error("Error rendering the rich text:", error);
        return null;
    }
}
