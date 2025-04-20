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
  showElem,
  hideElem,
  renderMediaplansList,
  renderReportsList,
  toggleMediaplansList,
  toggleReportsList,
  showMediaplansListBtn,
  showReportsListBtn,
  toggelAssistantOptionsMenu,
  addAssitantMsgToChat,
  addUserMsgToChat,
  renderChatBorderOnFocus,
} from './src/view';

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
    alert('Данные по отчетам уже загружены!');
    return;
  }

  addAssitantMsgToChat('Обработка Вашего запроса на получение отчетов!');

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
      resolve();
    }, getReportsTimer);
  });

  addAssitantMsgToChat('Отчеты загружены!');
  renderReportsList(appState.isReportsLoaded);
  renderMediaplansList(appState.isMediaPlansLoaded);
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
  const getMediaPlansTimer = 3000;
  appState.isMediaPlanLoading = true;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      getMediaPlansBtn.disabled = false;
      appState.isMediaPlanLoading = false;
      appState.isMediaPlansLoaded = true;

      hideElem(allFilesCap); // убирается "заглушка" отчетов и медиапланов
      showElem(mediaPlansAndReportsWrapper);

      resolve();
    }, getMediaPlansTimer);
  });

  addAssitantMsgToChat('Медиапланы загружены!');
  renderReportsList(appState.isReportsLoaded);
  renderMediaplansList(appState.isMediaPlansLoaded);
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
toggleAssistantOptionsBtn.addEventListener('click', toggelAssistantOptionsMenu);

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
