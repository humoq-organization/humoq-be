import { convertToSlug } from "./helper";

const cdnThumbnail = "https://assets.humoq.com/images/h100/";
const cdnImage = "https://assets.humoq.com/images/h512/";

export const serializeData = (data) => {
    if(!Array.isArray(data)) {
        return { title: data?.Title, description: data?.Description, url: data?.Url, slug: convertToSlug(data?.Title), thumbnail: cdnThumbnail + convertToSlug(data?.Title) + ".png", image: cdnImage + convertToSlug(data?.Title) + ".png", images: data?.Asset }
    }
    const newData = [];
    if(data?.length > 0) {
        data.map(val => {
            newData.push({ title: val?.Title, description: val?.Description, url: val?.Url, slug: convertToSlug(val?.Title), thumbnail: cdnThumbnail + convertToSlug(val?.Title) + ".png", image: cdnImage + convertToSlug(val?.Title) + ".png", images: val?.Asset })
        })
    }
    return newData;
}
