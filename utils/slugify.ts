const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\u3400-\u4dbf\u4e00-\u9fff\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const unslugify = (str: string) =>
  str.toLowerCase().trim().replace(/[-]+/g, " ");

export default slugify;
