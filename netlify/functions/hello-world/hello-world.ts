import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  // split the event.path so the first part is /hello-world and the second part is the name
  const matcher = event.path.match(/\/hello-world\/(?<name>[^\/]+)/)
  const name = (matcher?.groups && matcher.groups["name"]) ?? "";
  console.log('name', name)

  switch (name.toLowerCase()) {
    case "redirect": {
      return {
        statusCode: 302,
        headers: {
          Location: "https://www.netlify.com"
        }
      }
    }
    case "nick":
      return {
        statusCode: 200,
        body: `<html><body><h1>Hello, ${name}</h1><p>My name is Nick too!</p></body></html>`
      }
    case "erin":
      return {
        statusCode: 200,
        body: `<html><body><marquee>Hello, ${name}</marquee><marquee>My name is Erin too!</marquee
        ></body></html>`
      }
    case "brian":
      return {
        statusCode: 200,
        body: `<html><body><marquee><bold>Hello, ${name}</bold></marquee><marquee><font face="Comic Sans MS">My name is Brian too!</font></marquee
        ></body></html>`
      }
    default:
      return {
        statusCode: 404,
        body: `<html><body><h1>Page not found</h1></body></html>`
      }
  }
}
