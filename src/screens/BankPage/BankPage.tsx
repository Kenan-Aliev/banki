import PageWrapper from '@/containers/PageWrapper'
import React from 'react'
import BankIntro from './components/BankIntro/BankIntro'
import BankProducts from './components/BankProducts/BankProducts'
import Feedback from '@/components/FeedBacks/Feedback/Feedback'
import LatestNews from '@/components/LatestNews/LatestNews'
import HaveQues from '@/components/HaveQues/HaveQues'
import PopularOffers from './components/PopularOffers/PopularOffers'
import BankInfo from './components/BankInfo/BankInfo'

function BankPage() {
	return (
		<PageWrapper>
			<BankIntro />
			<BankProducts />
			<PopularOffers />
			<BankInfo />
			<Feedback title={'Отзывы '} sub={'о банке'} />
			<LatestNews />
			<HaveQues />
		</PageWrapper>
	)
}

export default BankPage