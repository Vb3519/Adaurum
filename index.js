import './styles/style.scss';

import {
  // Элементы интерфейса:
  showMediaPlansBtn,
  showReportsBtn,
  getReportsBtn,
  getMediaPlansBtn,
  allFilesCap,
  mediaPlansAndReportsWrapper,
  // Функции рендера:
  handleStickyNavMenuOnScroll,
  toggleAllfilesContainer,
  showElem,
  hideElem,
  renderMediaplansList,
  renderReportsList,
  toggleMediaplansList,
  toggleReportsList,
  showMediaplansListBtn,
  showReportsListBtn,
} from './src/view';

document.addEventListener('scroll', handleStickyNavMenuOnScroll);
showMediaplansListBtn.addEventListener('click', toggleMediaplansList);
showReportsListBtn.addEventListener('click', toggleReportsList);

// Состояние всего приложения:
// ------------------------------------
const appState = {
  // отчеты:
  isReportsLoading: false,
  isReportsLoaded: false,
  // медиапланы:
  isMediaPlanLoading: false,
  isMediaPlansLoaded: false,
  chatMessages: [],
};

// Загрузка отчетов:
// ------------------------------------
const handleGetReports = async () => {
  if (appState.isReportsLoaded) {
    console.log('Данные по отчетам уже получены!');
    return;
  }

  console.log('Обработка запроса на получение отчетов!');
  getReportsBtn.disabled = true;
  const getReportsTimer = 3000;
  appState.isReportsLoading = true;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      getReportsBtn.disabled = false;
      appState.isReportsLoading = false;
      appState.isReportsLoaded = true;

      hideElem(allFilesCap); // убирается "заглушка" отчетов и медиапланов
      showElem(mediaPlansAndReportsWrapper);

      console.log('Обработка запроса на получение отчетов завершена!');
      resolve();
    }, getReportsTimer);
  });

  renderReportsList(appState.isReportsLoaded);
  renderMediaplansList(appState.isMediaPlansLoaded);
};
getReportsBtn.addEventListener('click', handleGetReports);

// Загрузка медиапланов:
// ------------------------------------
const handleGetMediaplans = async () => {
  if (appState.isMediaPlansLoaded) {
    console.log('Данные по медиапланам уже получены!');
    return;
  }

  console.log('Обработка запроса на получение медиапланов!');
  getMediaPlansBtn.disabled = true;
  const getMediaPlansTimer = 3000;
  appState.isMediaPlanLoading = true;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      getMediaPlansBtn.disabled = false;
      appState.isMediaPlanLoading = false;
      appState.isMediaPlansLoaded = true;

      hideElem(allFilesCap); // убирается "заглушка" отчетов и медиапланов
      showElem(mediaPlansAndReportsWrapper);

      console.log('Обработка запроса на получение медиапланов завершена!');
      resolve();
    }, getMediaPlansTimer);
  });

  renderReportsList(appState.isReportsLoaded);
  renderMediaplansList(appState.isMediaPlansLoaded);
};
getMediaPlansBtn.addEventListener('click', handleGetMediaplans);

// Для мобильных устройств: отображение / скрытие файлов с отчетами
showReportsBtn.addEventListener('click', toggleAllfilesContainer);
showMediaPlansBtn.addEventListener('click', toggleAllfilesContainer);
