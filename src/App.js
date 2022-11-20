import React from 'react';

const HowItWorks = React.lazy(() => import('./pages/howItWorks'));

function App() {
	return (
		<React.Suspense fallback={<div>LOADING</div>}>
			<HowItWorks />
		</React.Suspense>
	);
}

export default App;
