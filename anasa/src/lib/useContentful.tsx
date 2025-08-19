"use server";

import { createClient } from "contentful";

const { NEXT_PUBLIC_API_TOKEN, NEXT_PUBLIC_SPACE, NEXT_PUBLIC_HOST } =
  process.env;

const useContentful = () => {
  const client = createClient({
    accessToken: NEXT_PUBLIC_API_TOKEN as string,
    space: NEXT_PUBLIC_SPACE as string,
    host: NEXT_PUBLIC_HOST,
  });

  const getEntries = async (contentType: string, page: string) => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        include: 6,
        select: ["fields"],
        "fields.type": page,
      });

      return entries?.items?.[0];
    } catch (error) {
      console.log(error);
    }
  };

  const getAllEntries = async (contentType: string, page: string) => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        include: 6,
        select: ["fields"],
        "fields.type": page,
      });
      return entries?.items;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllQueriedEntries = async (contentType: string, query: any) => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        include: 6,
        select: ["fields"],
        ...query,
      });
      return entries?.items;
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecificEntries = async (contentType: string) => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        include: 4,
        select: ["fields"],
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };

  const getEntryById = async (entryId: string) => {
  try {
    const entry = await client.getEntry(entryId, {
      include: 4, // optional: to include linked entries/assets
    });
    return entry;
  } catch (error) {
    console.error("Error fetching entry:", error);
  }
};

  const getPdfAssets = async () => {
    try {
      // Fetch assets from Contentful (you can filter by content type or other parameters)
      const assets = await client.getAssets({
        "fields.file.contentType": "application/pdf", // Filter by PDF file content type
      });

      // Check if assets are available
      if (assets.items && assets.items.length > 0) {
        return assets.items; // Return the list of PDF assets
      } else {
        throw new Error(`No PDF assets found`);
      }
    } catch (error) {
      console.error("Error fetching PDF assets:", error);
      throw error; // Re-throw the error to allow further handling
    }
  };

  const fetchPdfAssets = async () => {
    try {
      const pdfAssets = await getPdfAssets();
      pdfAssets.forEach((asset) => {
        if (asset.fields.file) {
        } else {
          console.warn("PDF Asset file is undefined:", asset);
        }
      });
    } catch (error) {
      console.error("Failed to fetch PDF assets:", error);
    }
  };

  return {
    getEntries,
    getAllEntries,
    getPdfAssets,
    fetchPdfAssets,
    getSpecificEntries,
    getAllQueriedEntries,
    getEntryById
  };
};

export default useContentful;
