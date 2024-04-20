import * as fs from "fs";
// fs.writeFile("./message.txt", "Hello Node.js", (err) => {
//   if (err) throw err;
//
//   fs.readFile("./message.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });
// });

const readStream = fs.createReadStream("./message.txt", { highWaterMark: 16 });
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log(`data: ${chunk} ${chunk.length}`);
});

readStream.on("end", () => {
  // eslint-disable-next-line no-undef
  console.log("end", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("err", err);
});
