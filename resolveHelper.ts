import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path'

const layers = ['entities', 'widgets','pages','shared']

function exportedNames(src: string, componentsOnly: boolean): string[] {
  const names: string[] = []
  for (const block of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of block[1].split(',')) {
      const p = part.trim()
      if (!p) continue
      const name = p
        .split(/\s+as\s+/)
        .pop()!
        .trim()
      if (!componentsOnly || /^[A-Z]/.test(name)) names.push(name)
    }
  }
  return names
}

const map = new Map<string, string>()

for (const layer of layers) {
  const root = resolve('src', layer)
  if (!existsSync(root)) continue
  for (const d of readdirSync(root, { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    const index = resolve(root, d.name, 'index.ts')
    if (!existsSync(index)) continue
    for (const name of exportedNames(readFileSync(index, 'utf8'), layer !== 'shared')) {
      map.set(name, `@/${layer}/${d.name}`)
    }
  }
}

export { map }
