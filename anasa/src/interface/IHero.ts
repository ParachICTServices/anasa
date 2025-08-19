import { FileData } from "./IContentfulData"

export interface IHero {
    title: string,
    text?: string,
    description?: any,
    type?: types,
    images?: FileData[],
    className?: string
    bodyClassName?: string
    image: string
    allowCompression?: boolean
    logo?: boolean
    logoImg?: any
}

export enum types {
    ONE='one',
    TWO='two',
    THREE='three',
    FOUR='four',
    FIVE='five',
    SIX='six',
    SEVEN='seven'
}