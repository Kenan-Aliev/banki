export interface Review {
	id: number
	title: string
	content: string
	verified: boolean
	product_type: string
	rating: number
}


export interface ReviewsListResponse {
	count: number
	next: string | null
	previous: string | null
	results: Review[]
}