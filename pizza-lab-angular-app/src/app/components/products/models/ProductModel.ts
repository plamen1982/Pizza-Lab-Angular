import { ReviewModel } from './ReviewModel'

export class ProductModel {
  public _id: string
  public name: string
  public description: string
  public image: string
  public price: number
  public weight: number
  public ingredients: Array<String>
  public likes: Array<String>
  public reviews: ReviewModel[]
}
