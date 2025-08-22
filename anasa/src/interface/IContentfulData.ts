import { Document } from "@contentful/rich-text-types";

export interface IContentfulInterface {
  fields: FieldsInterface;
  metadata: MetaInterface;
  sys: SysInterface;
}

export interface FieldsInterface {
  title?: any;
  file?: FileData;
  text?: string;
  logo?: string;
  subtitle?: string;
  bottomText?: string;
  backgroundImage?: string;
  section?: string;
  subsection?: any[];
  contactDetails?: any[];
  sections?: any[];
  image?: any;
  images?: any[];
  language?:string[],
  fullDescription?: Document,
  socials: string[],
  description?: string | string[],
}

interface MetaInterface {
  concepts: string[];
  tags: string[];
}

export interface FileData {
  contentType: string;
  details: FileDetails;
  fileName: string;
  url: string;
}
interface FileDetails {
  size: number;
  image: Record<string, any>; // or define a more specific type if you know the shape
}
interface SysInterface {
  contentType: any;
  createdAt: string;
  environment: any;
  id: string;
  locale: string;
  publishedVersion: number;
  revision: number;
  space: any;
  type: string;
  updatedAt: string;
}
