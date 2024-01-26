export interface Review {
	id: number
	title: string
	content: string
	verified: boolean
	product_type: string
	rating: number
}

export interface ReviewsCategory {
	id: number
	title: string
}


export interface ReviewsListResponse {
	count: number
	results: Review[]
}

export interface ReviewsCategoriesResponse {
	count: number
	results: ReviewsCategory[]
}