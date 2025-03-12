import autocannon from 'autocannon';

const urls = {
    node: "http://localhost:3000",
    bun: "http://localhost:3001",
    deno: "http://localhost:3002",
};

async function runBenchmark(url: string, name: string) {
    console.log(`Benchmarking ${name}...`);
    const result = await autocannon({
      url,
      connections: 100,
      duration: 10,
    });
    console.log(`${name} Results:`, result.requests.average, "req/sec");
    console.log(result.requests.total, 'Total Requests Handled')
  }
  
  await runBenchmark(urls.node, 'NodeJS')
  await runBenchmark(urls.bun, 'BunJS')
  await runBenchmark(urls.deno, 'DenoJS')
