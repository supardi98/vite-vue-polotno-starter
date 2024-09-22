import React from 'react';
import ReactDOM from 'react-dom/client';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { ChartSection, getChart } from './ChartSection';

import { createStore } from 'polotno/model/store';

// import all default sections
import { DEFAULT_SECTIONS } from 'polotno/side-panel';

const store = createStore({
  key: 'nFA5H9elEytDyPyvKL7T', // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});


// add to global namespace for debugging
window.store = store;

// add page and element instantly
store.addPage();

// add sample data
// const val = 'https://polotno.com/';
getChart({ data: [[25, 40, 10]], type: 'pie' }).then((src) => {
  store.activePage.addElement({
    type: 'svg',
    name: 'chart',
    x: store.width / 2 - 150,
    y: store.height / 2 - 150,
    width: 400,
    height: 300,
    src,
    custom: {
      data: [25, 40],
    },
  });
});

// we will have just two sections
const sections = [ChartSection, ...DEFAULT_SECTIONS];


const page = store.addPage();

export const App = ({ store }) => {
  return (
    <PolotnoContainer style={{ width: '100%', height: '100%' }}>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} defaultSection="charts" />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} />
        <Workspace store={store} />
        <ZoomButtons store={store} />
        <PagesTimeline store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

// default API of your editor
export const createEditor = ({ container }) => {
  const root = ReactDOM.createRoot(container);
  root.render(<App store={store} />);
};

// make API global for simple start in development
window.createEditor = createEditor;
