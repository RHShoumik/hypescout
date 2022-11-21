import React from 'react';

import Loader from "components/Loader/Loader";

const HowItWorks = React.lazy(() => import('./pages/howItWorks'));

function App() {
	return (
		<React.Suspense fallback={<Loader />}>
			<HowItWorks />
		</React.Suspense>
	);
}

export default App;
