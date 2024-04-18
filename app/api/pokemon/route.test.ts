/**
 * @jest-environment node
 */
import { GET } from "./route";

it("should return data with status 200", async () => {
  const response = await GET(
    new Request("https://pokeapi.co/api/v2/pokemon?name=pikachu")
  );
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body.pokemon.id).toBe(25);
});
