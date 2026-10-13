/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { CompareFloatingBar } from './components/CompareFloatingBar';
import { SchemeDetailModal } from './components/modals/SchemeDetailModal';
import { FacilityDetailModal } from './components/modals/FacilityDetailModal';
import { CompareSchemesModal } from './components/modals/CompareSchemesModal';

import { HomeView } from './components/views/HomeView';
import { DashboardView } from './components/views/DashboardView';
import { CategoriesView } from './components/views/CategoriesView';
import { SchemesDirectoryView } from './components/views/SchemesDirectoryView';
import { ApplicationGuidesView } from './components/views/ApplicationGuidesView';
import { HealthcareView } from './components/views/HealthcareView';
import { RationFoodView } from './components/views/RationFoodView';
import { EducationView } from './components/views/EducationView';
import { MapView } from './components/views/MapView';
import { LifeMapRadarView } from './components/views/LifeMapRadarView';
import { AskLifebridgeView } from './components/views/AskLifebridgeView';
import { SupportWalletView } from './components/views/SupportWalletView';
import { PortalsDirectoryView } from './components/views/PortalsDirectoryView';
import { AboutView } from './components/views/AboutView';
import { SkillTrainingView } from './components/views/SkillTrainingView';
import { WidowPensionView } from './components/views/WidowPensionView';
import { CyberPoliceHelplinesView } from './components/views/CyberPoliceHelplinesView';
import { ScStObcWelfareView } from './components/views/ScStObcWelfareView';
import { PublicMoneyAccountabilityView } from './components/views/PublicMoneyAccountabilityView';
import { ProjectPresentationView } from './components/views/ProjectPresentationView';

const MainContent: React.FC = () => {
  const { 
    currentView, 
    selectedSchemeForDetail, 
    setSelectedSchemeForDetail,
    selectedFacilityForDetail,
    setSelectedFacilityForDetail,
    isComparisonModalOpen,
    setIsComparisonModalOpen
  } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-[#F7F8FC]">
      {/* Top Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Sticky Header */}
      <Header />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'home' && <HomeView />}
        {(currentView === 'dashboard' || currentView === 'find_schemes') && <DashboardView />}
        {currentView === 'categories' && <CategoriesView />}
        {currentView === 'explore_schemes' && <SchemesDirectoryView />}
        {currentView === 'compare' && <CategoriesView />}
        {currentView === 'skill_training' && <SkillTrainingView />}
        {currentView === 'widow_pension' && <WidowPensionView />}
        {currentView === 'cyber_police_helplines' && <CyberPoliceHelplinesView />}
        {currentView === 'sc_st_obc_welfare' && <ScStObcWelfareView />}
        {currentView === 'public_money_accountability' && <PublicMoneyAccountabilityView />}
        {currentView === 'guides' && <ApplicationGuidesView />}
        {currentView === 'healthcare' && <HealthcareView />}
        {currentView === 'food_ration' && <RationFoodView />}
        {currentView === 'education' && <EducationView />}
        {currentView === 'maps' && <MapView />}
        {currentView === 'lifemap' && <LifeMapRadarView />}
        {currentView === 'ask_lifebridge' && <AskLifebridgeView />}
        {currentView === 'wallet' && <SupportWalletView />}
        {currentView === 'portals' && <PortalsDirectoryView />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'presentation' && <ProjectPresentationView />}
      </main>

      {/* Persistent Compare Floating Bar */}
      <CompareFloatingBar />

      {/* Scheme Detail Modal */}
      {selectedSchemeForDetail && (
        <SchemeDetailModal
          scheme={selectedSchemeForDetail}
          onClose={() => setSelectedSchemeForDetail(null)}
        />
      )}

      {/* Facility Detail Modal */}
      {selectedFacilityForDetail && (
        <FacilityDetailModal
          facility={selectedFacilityForDetail}
          onClose={() => setSelectedFacilityForDetail(null)}
        />
      )}

      {/* Compare Schemes Modal */}
      {isComparisonModalOpen && (
        <CompareSchemesModal
          onClose={() => setIsComparisonModalOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
