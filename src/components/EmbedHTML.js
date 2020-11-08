import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<iframe width="560" 
	height="315" 
	src="https://www.youtube.com/embed/Nw9VueOQmHg" 
	frameborder="0" 
	allow="accelerometer; autoplay; 
	clipboard-write; encrypted-media; 
	gyroscope; picture-in-picture" 
	allowfullscreen>
		</iframe>
	`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});