export async function POST(req: Request) {
  return new Response(JSON.stringify({ mood: "happy" }), {
    headers: { "Content-Type": "application/json" },
  });
}
