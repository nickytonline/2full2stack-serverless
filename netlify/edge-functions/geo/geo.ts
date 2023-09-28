import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  return Response.json({
    geo: context.geo,
    header: request.headers.get("x-nf-geo"),
  });
};