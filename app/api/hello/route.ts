// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(request: Request) {
  if (request) {
    return new Response("Hello, Next.js!");
  }
}
