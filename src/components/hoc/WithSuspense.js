import React from 'react';

export const WithSuspense = (Component) => {
    return (props) => {
      return <React.Suspense fallback={<div>Загрузка...</div>}>
            <Component {...props}/>
        </React.Suspense>
    }
};

