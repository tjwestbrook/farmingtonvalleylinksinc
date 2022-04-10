export async function getServerSideProps(base:String, keys:Array<String>) {
  const { Deta } = require("deta")
  const deta = Deta(process.env.DETA_PROJECT_KEY)
  const db = deta.Base(base)
  let d = new Array<String>()
  for (let k in  keys) {
    const info = await db.get(k)
    d.push(k, info)
  }
  return d
}