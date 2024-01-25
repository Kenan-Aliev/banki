import React from 'react';

interface GoogleAnalyticsProps {
	gaTrackingId: string;
}

function GoogleAnalytics({ gaTrackingId }: GoogleAnalyticsProps) {
	const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;

	return (
		<>
			<script async src={scriptSrc}></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}');
          `,
				}}
			/>
		</>
	);
}

export default GoogleAnalytics;
