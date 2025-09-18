import Layout from "./Layout.jsx";

import Home from "./Home";

import PrivacyPolicy from "./PrivacyPolicy";

import Explore from "./Explore";

import Creators from "./Creators";

import CreatorApplication from "./CreatorApplication";

import AffiliateLinks from "./AffiliateLinks";

import Inspire from "./Inspire";

import Blog from "./Blog";

import About from "./About";

import Careers from "./Careers";

import CreatorAcademy from "./CreatorAcademy";

import TermsOfUse from "./TermsOfUse";

import NotFound from "./NotFound";

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    PrivacyPolicy: PrivacyPolicy,
    
    Explore: Explore,
    
    Creators: Creators,
    
    CreatorApplication: CreatorApplication,
    
    AffiliateLinks: AffiliateLinks,
    
    Inspire: Inspire,
    
    Blog: Blog,
    
    About: About,
    
    Careers: Careers,
    
    CreatorAcademy: CreatorAcademy,
    
    TermsOfUse: TermsOfUse,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>

                    <Route path="/" element={<Navigate to="/Home" replace />} />


                <Route path="/Home" element={<Home />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/Explore" element={<Explore />} />
                
                <Route path="/Creators" element={<Creators />} />
                
                <Route path="/CreatorApplication" element={<CreatorApplication />} />
                
                <Route path="/AffiliateLinks" element={<AffiliateLinks />} />
                
                <Route path="/Inspire" element={<Inspire />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Careers" element={<Careers />} />
                
                <Route path="/CreatorAcademy" element={<CreatorAcademy />} />
                
                <Route path="/TermsOfUse" element={<TermsOfUse />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}