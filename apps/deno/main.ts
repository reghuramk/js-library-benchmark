Deno.serve({port: 3002},(_req) => {
  return new Response("Hello, World!");
});

