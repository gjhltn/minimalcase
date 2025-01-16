import fs from 'fs'
import { join } from 'path'

const getData = () => {
    let f = join(process.cwd(), "/src/app/[id]/datafile.md")
    return fs.statSync(f)
}

export default function BlogPage() {
    const data = getData()
  return (
    <pre>{JSON.stringify(data,null,2)}</pre>
  );
}
