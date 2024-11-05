import getFeaturedImage from "../utils/getFeaturedImage";
import { Archive } from "~/types/Archive";
import { RoomsSchema } from "../schemas/RoomsSchema";

export default defineEventHandler(async (event): Promise<Archive[]> => {
  const url = getUrl({
    image: true,
    type: "room",
    fields: ["title", "slug", "excerpt", "acf"],
  });

  const response = await $fetch(url);

  const parsed = RoomsSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      message: parsed.error.issues.map((i) => i.path).join(","),
    });
  }

  if (!parsed.data.length) {
    throw createError({
      message: "Page not found",
    });
  }

  return parsed.data.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      link: item.slug,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
      price: item.acf.price_from,
    };
  });
});