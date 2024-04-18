export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const pokemon = await res.json();

  return Response.json({ pokemon });
}
