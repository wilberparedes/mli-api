import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string): string | undefined => {
  const file = fileName.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((fileName: string) => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== undefined && cleanName !== 'index') {
    console.log('cleanName', cleanName)
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/api/${cleanName}`, moduleRouter.router)
    }).catch((error) => {
      console.log('error import routes', error)
    })
  }
  return undefined
})

export { router }
