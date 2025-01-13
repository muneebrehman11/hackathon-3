import { type SchemaTypeDefinition } from 'sanity'
import shop from '@/sanity/schemaTypes/shop'
import homeProducts from './homeProducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    shop,
    homeProducts
  ],
}
