# 🚀 Backend Runtime Benchmarking    
This project benchmarks the performance of three different JavaScript/TypeScript runtimes:
Node.js, Bun, and Deno using the Autocannon benchmarking tool.
## 📌 Tech Stack
* Node.js → JavaScript runtime built on Chrome’s V8 engine.
* Bun → Lightning-fast JavaScript runtime built with Zig.
* Deno → Secure runtime for JavaScript and TypeScript, written in Rust.
## 🔥 Benchmarking Setup
### ✅ 1. Install Autocannon

Ensure you have the Autocannon benchmarking tool installed globally:

	npm install -g autocannon

### ⚙️ 2. Navigate to Each Runtime Folder & Start the Servers

```
# start Bun server
cd apps/bun
bun run index.ts
```
```
# start Deno server
cd apps/deno
deno run --allow-net main.ts
```
```
# start Node.js server
cd apps/node
npm run dev
```
### 🚀 3. Run the Benchmark
Once all servers are running, execute the Autocannon benchmark against each runtime:

```
# benchmark Node.js (port 3000)
autocannon -c 100 -d 10 http://localhost:3000
```
```
# benchmark Bun (port 3001)
autocannon -c 100 -d 10 http://localhost:3001
```
```
# benchmark Deno (port 3002)
autocannon -c 100 -d 10 http://localhost:3002
```
## 📊 Benchmark Parameters Explained
* -c 100: 100 concurrent connections.
* -d 10: 10-second duration for the test.
* http://localhost:3000: The server endpoint to target.

## 🔥 Results & Analysis
Once the benchmark is complete, you will see output showing:
* Requests per second (RPS).
* Latency statistics (min, max, average).
* Throughput in MB/s.
  
You can compare the performance across runtimes based on these metrics.

## ⚡ Conclusion
Use this benchmark to evaluate the performance of Node.js, Bun, and Deno in handling concurrent requests under load.

🚀 Feel free to customize the Autocannon parameters or add additional runtime configurations for more detailed testing!

