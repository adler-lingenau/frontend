import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";

export const ArrangementSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
      rendered: z.string(),
    }),
    content: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(FeaturedImageSchema).default([]),
    }),
    acf: z.object({
      prices: z.array(
        z.object({
          label: z.string(),
          value: z.string().transform((val) => Number(val)),
        })
      ),
    }),
  })
);