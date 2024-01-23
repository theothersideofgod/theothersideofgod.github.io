var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

fs.createReadStream("resume.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("resume.pdf"))

// --- OR ---

// markdownpdf().from("/path/to/document.md").to("/path/to/document.pdf", function () {
//   console.log("Done")
// })