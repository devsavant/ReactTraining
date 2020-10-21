import React, {Suspense} from 'react';
import CharDisplay from './CharDisplay'
import ErrorBoundary from './ErrorBoundary'

const Home = () => { 
    return ( 
        <ErrorBoundary fallback={<h2>Se rompió alv</h2>} >
            <Suspense fallback="Loading...">
                RickyMorty
                <hr width="10%"/>
                {/* {renderChars()} */}
                <CharDisplay />
            </Suspense>
        </ErrorBoundary>

        
    );
}
 
export default Home;