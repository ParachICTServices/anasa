// export const processImage = (image) => {
//   const splittedImage = image?.split("/upload");
//   if(splittedImage){
//       const section1 = splittedImage[0];
//       const section2 = splittedImage[1];
//       const formattedImage = `${section1}/upload/c_auto,g_auto,w_700`;
//       const joinedImage = formattedImage + section2;
//       return joinedImage;
//   }
//   return null
// };


export const processImage = (
  image: any
) => {
  let url = image;

  // Ensure the URL is absolute
  if (image.startsWith("//")) {
    url = "https:" + image;
  }


  return url;
};

export const processRawImage = (
  image: any,
  allowCompression = true,
  width = 800,
  format = "webp",
  quality = 80
): any => {
  if (!image) return "";

  let url = "";

  if (Array.isArray(image)) {
    url = image?.[0]?.fields?.file?.url || "";
  } else if (image?.fields?.file?.url) {
    url = image?.fields?.file?.url;
  }

  // Ensure the URL is absolute
  if (url.startsWith("//")) {
    url = "https:" + url;
  }

  // Add image optimization params
  url = allowCompression ? `${url}?w=${width}&fm=${format}&q=${quality}` : url
   return url; 
};

// export const processRawImage = (
//   image: any,
//   width = 800,
//   format = "webp",
//   quality = 80,
//   useOptimization = true
// ): string => {
//   if (!image) return "";

//   let url = "";

//   if (Array.isArray(image)) {
//     url = image?.[0]?.fields?.file?.url || "";
//   } else if (image?.fields?.file?.url) {
//     url = image.fields.file.url;
//   }

//   if (!url) return "";

//   // Ensure the URL is absolute
//   if (url.startsWith("//")) {
//     url = "https:" + url;
//   }

//   if (!useOptimization) {
//     return url; // Return raw URL if optimization is turned off
//   }

//   const hasParams = url.includes("?");
//   const separator = hasParams ? "&" : "?";

//   // Safely append optimization params
//   return `${url}${separator}w=600&fm=webp&q=70`;
// };
