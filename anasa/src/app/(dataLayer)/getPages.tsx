import useContentful from "../../lib/useContentful";
const {
  getEntries,
  getAllEntries,
  getSpecificEntries,
  getAllQueriedEntries,
  getEntryById,
} = useContentful();

const getPage = async (type: string, page: string) => {
  const entry = await getEntries(type, page);
  return entry?.fields?.section;
};
const getPageSection = async (type: string, page: string) => {
  const entry = await getAllEntries(type, page);
  return entry;
};

const getSection = async (type: string) => {
  const entry = await getSpecificEntries(type);
  return entry?.items;
};

const getQuerySection = async (type: string, query: any) => {
  const entry = await getAllQueriedEntries(type, query);
  return entry;
};

const getEntry = async (id: string) => {
  const entry = await getEntryById(id);
  return entry;
};

export { getPage, getSection, getPageSection, getQuerySection, getEntry };
