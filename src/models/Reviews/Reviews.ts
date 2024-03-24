export interface Review {
	id: number
	title: string
	content: string
	bank_id: number
	verified: boolean
	product_type: string
	rating: number
	bank_logo: string
	bank_name: string
	publish_date: string
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