export default async function GET(request: Request) {
  if (request) {
    return new Response("Hello, Next.js!");
  }
}
