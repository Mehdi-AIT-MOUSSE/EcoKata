import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { brandType } from './brandType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, addressType, brandType],
}
