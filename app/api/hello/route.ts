// eslint-disable-next-line import/prefer-default-export
export async function GET(request: Request) {
  if (request) {
    return new Response("Hello, Next.js!");
  }
}
