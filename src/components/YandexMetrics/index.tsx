import React from 'react';

interface YandexMetrikaTagProps {
	yid: number;
	clickmap?: boolean;
	trackLinks?: boolean;
	accurateTrackBounce?: boolean;
	webvisor?: boolean;
}

interface YandexMetrikaPixelProps {
	yid: number;
}

function convertParam(boolValue: boolean | undefined, defaultValue: boolean): string {
	return (boolValue === undefined ? defaultValue : boolValue) ? "true" : "false";
}

function YandexMetrikaTag({
	yid,
	clickmap = true,
	trackLinks = true,
	accurateTrackBounce = true,
	webvisor = true,
}: YandexMetrikaTagProps) {
	const scriptInjectorHTML = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  `;

	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `
            ${scriptInjectorHTML}
            ym(${yid}, "init", {
                clickmap:${convertParam(clickmap, true)},
                trackLinks:${convertParam(trackLinks, true)},
                accurateTrackBounce:${convertParam(accurateTrackBounce, true)},
                webvisor:${convertParam(webvisor, true)}
            });
      `,
			}}
		/>
	);
}

function YandexMetrikaPixel({ yid }: YandexMetrikaPixelProps) {
	const pixelSource = `https://mc.yandex.ru/watch/${yid}`;

	/* eslint-disable @next/next/no-img-element */
	return (
		<noscript>
			<div>
				<img
					src={pixelSource}
					style={{ position: "absolute", left: "-9999px" }}
					alt=""
				/>
			</div>
		</noscript>
	);
}

interface YandexMetrikaProps extends YandexMetrikaTagProps, YandexMetrikaPixelProps { }

export default function YandexMetrika({
	yid,
	clickmap = true,
	trackLinks = true,
	accurateTrackBounce = true,
	webvisor = true,
}: YandexMetrikaProps) {
	return (
		<>
			<YandexMetrikaTag
				yid={yid}
				clickmap={clickmap}
				trackLinks={trackLinks}
				accurateTrackBounce={accurateTrackBounce}
				webvisor={webvisor}
			/>
			<YandexMetrikaPixel yid={yid} />
		</>
	);
}
