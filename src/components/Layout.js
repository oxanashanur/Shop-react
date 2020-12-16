import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';


const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Shop" : "React.js" }</title>
            <meta name = "description" content={ description || "React.js" } />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;