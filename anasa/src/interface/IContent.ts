import { types } from "./IHero";

export interface IContent {
    title: string,
    text?: string,
    type?: types,
    subtitle?: string,
    className?: React.HTMLAttributes<HTMLHeadingElement>["className"],
    bodyClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"],
    headingClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"],
    textClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"],
    button?: boolean,
    buttonText?: string,
    children?: React.ReactNode,
}