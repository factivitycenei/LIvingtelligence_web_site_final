import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import PartnerFactSheet from './pages/PartnerFactSheet';
import ScopeProposal from './pages/ScopeProposal';
import Privacy from './pages/Privacy';
import About from './pages/About';
import ArticleFiveSignals from './pages/ArticleFiveSignals';
import ArticleInvisibleEffect from './pages/ArticleInvisibleEffect';
import ArticleClientReadiness from './pages/ArticleClientReadiness';
import ArticlePhilosophy from './pages/ArticlePhilosophy';
import ArticleInterrogationValues from './pages/ArticleInterrogationValues';
import SignalReadout from './pages/SignalReadout';
import PhenomenaGallery from './pages/PhenomenaGallery';
import LearningGap from './pages/phenomena/LearningGap';
import AchievementGap from './pages/phenomena/AchievementGap';
import PurposeShift from './pages/phenomena/PurposeShift';
import CognitiveOutsourcing from './pages/phenomena/CognitiveOutsourcing';
import CognitiveSurrender from './pages/phenomena/CognitiveSurrender';
import AlgorithmicSycophancy from './pages/phenomena/AlgorithmicSycophancy';
import CapacityGap from './pages/phenomena/CapacityGap';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<PartnerFactSheet />} />
        <Route path="/scope-proposal" element={<ScopeProposal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/five-signals" element={<ArticleFiveSignals />} />
        <Route path="/article/invisible-effect" element={<ArticleInvisibleEffect />} />
        <Route path="/article/client-readiness" element={<ArticleClientReadiness />} />
        <Route path="/article/philosophy" element={<ArticlePhilosophy />} />
        <Route path="/article/interrogation-values" element={<ArticleInterrogationValues />} />
        <Route path="/signal-readout" element={<SignalReadout />} />
        <Route path="/phenomena" element={<PhenomenaGallery />} />
        
        {/* Phenomena Articles */}
        <Route path="/phenomenon/learning-gap" element={<LearningGap />} />
        <Route path="/phenomenon/achievement-gap" element={<AchievementGap />} />
        <Route path="/phenomenon/purpose-shift" element={<PurposeShift />} />
        <Route path="/phenomenon/cognitive-outsourcing" element={<CognitiveOutsourcing />} />
        <Route path="/phenomenon/cognitive-surrender" element={<CognitiveSurrender />} />
        <Route path="/phenomenon/algorithmic-sycophancy" element={<AlgorithmicSycophancy />} />
        <Route path="/phenomenon/capacity-gap" element={<CapacityGap />} />
      </Routes>
    </BrowserRouter>
  );
}
