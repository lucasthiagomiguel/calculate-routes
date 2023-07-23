import { AppDataSource } from '../../../data-source'
import { Documents } from '../entities/Documents'

export const documentsRepository = AppDataSource.getRepository(Documents)
