import './styles/style.scss';

// ВИД:
// ------------------------------------
import {
  // Элементы интерфейса:
  showMediaPlansBtn,
  showReportsBtn,
  getReportsBtn,
  getMediaPlansBtn,
  allFilesCap,
  toggleAssistantOptionsBtn,
  mediaPlansAndReportsWrapper,
  chatTextArea,
  chatSendMsgBtn,

  // Функции рендера:
  handleStickyNavMenuOnScroll,
  toggleAllfilesContainer,
  toggleElemVisibility,
  renderMediaplansList,
  renderReportsList,
  toggleMediaplansList,
  toggleReportsList,
  showMediaplansListBtn,
  showReportsListBtn,
  toggleAssistantOptionsMenu,
  addAssitantMsgToChat,
  addUserMsgToChat,
  renderChatBorderOnFocus,
} from './src/view';

// Состояние всего приложения:
// ------------------------------------
const appState = {
  isReportsLoaded: false,
  isMediaPlansLoaded: false,
  loadingTimer: 2000,
};

const fileTypes = {
  reports: 'reports',
  mediaplans: 'mediaplans',
};

// Общая функция для загрузки файлов:
const loadFilesData = (btn, filesType) => {
  btn.disabled = false;

  if (filesType === 'reports') {
    appState.isReportsLoaded = true;
  }

  if (filesType === 'mediaplans') {
    appState.isMediaPlansLoaded = true;
  }

  toggleElemVisibility(allFilesCap, false);
  toggleElemVisibility(mediaPlansAndReportsWrapper, true);
};

// Общая функция для отображения результатов загрузки:
const showFilesLoadResult = (message) => {
  addAssitantMsgToChat(message);
  renderReportsList(appState.isReportsLoaded);
  renderMediaplansList(appState.isMediaPlansLoaded);
};

// Загрузка отчетов:
// ------------------------------------
const handleGetReports = async () => {
  if (appState.isReportsLoaded) {
    alert('Данные по отчетам уже загружены!');
    return;
  }

  addAssitantMsgToChat('Обработка Вашего запроса на получение отчетов!');

  getReportsBtn.disabled = true;

  // имитация загрузки данных:
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        loadFilesData(getReportsBtn, fileTypes.reports);

        resolve();
      }, appState.loadingTimer);
    });

    showFilesLoadResult('Отчеты загружены!');
  } catch (error) {
    console.log('Ошибка:', error.message);
  }
};

// Загрузка медиапланов:
// ------------------------------------
const handleGetMediaplans = async () => {
  if (appState.isMediaPlansLoaded) {
    alert('Данные по медиапланам уже загружены!');
    return;
  }

  addAssitantMsgToChat('Обработка Вашего запроса на получение медиапланов!');
  getMediaPlansBtn.disabled = true;

  // имитация загрузки данных:
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        loadFilesData(getMediaPlansBtn, fileTypes.mediaplans);

        resolve();
      }, appState.loadingTimer);
    });

    showFilesLoadResult('Медиапланы загружены!');
  } catch (error) {
    console.log('Ошибка:', error.message);
  }
};

// Добавление в чат сообщения пользователя:
// ------------------------------------
const handleAddUserMsgToChat = () => {
  const userMessage = chatTextArea.value;

  if (userMessage.length > 0) {
    addUserMsgToChat(userMessage);
    chatTextArea.value = '';
  } else {
    alert('Пожалуйста введите Ваше сообщение!');
  }
};

// Обработчики событий:
// ------------------------------------
document.addEventListener('scroll', handleStickyNavMenuOnScroll);

// Для мобильных устройств: отображение / скрытие всего поля "Файлы"
showReportsBtn.addEventListener('click', toggleAllfilesContainer);
showMediaPlansBtn.addEventListener('click', toggleAllfilesContainer);

// Отображение / скрытие списков медиапланов или отчетов:
showMediaplansListBtn.addEventListener('click', toggleMediaplansList);
showReportsListBtn.addEventListener('click', toggleReportsList);

// Скачать списки медиапланов или отчетов:
getReportsBtn.addEventListener('click', handleGetReports);
getMediaPlansBtn.addEventListener('click', handleGetMediaplans);

// Отображение / скрытие меню обратной связи по ассистенту:
toggleAssistantOptionsBtn.addEventListener('click', toggleAssistantOptionsMenu);

// Чат (отправка сообщений):
chatSendMsgBtn.addEventListener('click', handleAddUserMsgToChat); // отправка сообщения по клику

document.addEventListener('keydown', (event) => {
  // отправка сообщения при нажатии "Enter"
  if (event.key === 'Enter') {
    handleAddUserMsgToChat();
  }
});

// Рендер рамки чата при фокусе:
chatTextArea.addEventListener('focus', () => {
  renderChatBorderOnFocus(true);
});

chatTextArea.addEventListener('blur', () => {
  renderChatBorderOnFocus(false);
});
