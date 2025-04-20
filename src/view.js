import getCurrentTime from './utils/getCurrentTime';

// ------------------------------------------------------------------
// ЭЛЕМЕНТЫ ИНТЕРФЕЙСА:
// ------------------------------------------------------------------
export const appHeader = document.querySelector('.app-page__header');
export const headerMediaAndReportsBtns = document.querySelector(
  '.app-header__info-btn-grp'
);

// Toggle-кнопки (отчеты и медиапланы):
export const showMediaPlansBtn = document.querySelector('.media-plans-btn');
export const showReportsBtn = document.querySelector('.reports-btn');

export const showMediaplansListBtn = document.querySelector(
  '.media-plans-box__title'
);
export const showReportsListBtn = document.querySelector('.reports-box__title');

// Меню смена ассистента (обратная связь):
export const toggleAssistantOptionsBtn = document.querySelector(
  '.assistant-title__badge'
);
export const assistantOptionsMenu = document.querySelector(
  '.assistant-title__options'
);

// Запрос информации по отчетам и медиапланам:
export const getReportsBtn = document.querySelector('.get-reports-btn');
export const getMediaPlansBtn = document.querySelector('.get-media-plans-btn');

// Контейнеры для файлов (заглушка; общий; медиапланы; отчеты):
export const allFilesContainer = document.querySelector('.app-main__all-files');
export const allFilesCap = document.querySelector('.all-files__cap'); // "заглушка"
export const mediaPlansAndReportsWrapper = document.querySelector(
  '.all-files__plans-and-reports-wrapper'
);

// Медиапланы:
export const mediaplansContainer = document.querySelector(
  '.all-files__media-plans'
);
export const mediaplansList = document.querySelector('.media-plans-box__list');

// Отчеты:
export const reportsContainer = document.querySelector('.all-files__reports');
export const reportsList = document.querySelector('.reports-box__list');

// Чат:
export const chatMessagesCap = document.querySelector(
  '.app-chat__descrip-and-actions'
);
export const chatMsgList = document.querySelector('.app-chat__messages');
export const chatBody = document.querySelector('.app-chat__body');
export const chatTextArea = document.querySelector('.chat-body__text-area');
export const chatSendMsgBtn = document.querySelector('.chat-actions__send-msg');

// ------------------------------------------------------------------
// ФУНКЦИИ РЕНДЕРА:
// ------------------------------------------------------------------

// "Прилипающее" меню навигации при скролле:
export const handleStickyNavMenuOnScroll = () => {
  const isNavMenuSticky = window.innerWidth < 1440;

  if (isNavMenuSticky && window.scrollY > 0) {
    appHeader.classList.add('sticky-nav-menu');
    headerMediaAndReportsBtns.classList.add('hidden-elem');
  } else {
    appHeader.classList.remove('sticky-nav-menu');
    headerMediaAndReportsBtns.classList.remove('hidden-elem');
  }
};

// Для мобильных устройств: отображение / скрытие файлов с отчетами
export const toggleAllfilesContainer = () => {
  console.log('Показываем все файлы');
  allFilesContainer.classList.toggle('active-elem');
};

// Toggle меню ассистента (обратная связь):
export const toggelAssistantOptionsMenu = () => {
  assistantOptionsMenu.classList.toggle('active-elem');
};

// Отобразить или скрыть элемент:
export const showElem = (elem) => {
  elem.classList.add('active-elem');
};

export const hideElem = (elem) => {
  elem.classList.add('hidden-elem');
};

// Рендер списка медиапланов:
export const renderMediaplansList = (isMediaplansDataLoaded) => {
  mediaplansList.innerHTML = `
    ${isMediaplansDataLoaded ? mediaplansDataLoadedHtml : mediaplansDataEmpty}
  `;
};

// Рендер списка отчетов:
export const renderReportsList = (isReportsDataLoaded) => {
  reportsList.innerHTML = `
    ${isReportsDataLoaded ? reportsDataLoadedHtml : reportsDataEmpty}
  `;
};

// Toggle поля со списком медиапланов или отчетов:
export const toggleMediaplansList = () => {
  mediaplansList.classList.toggle('hidden-elem');
};

export const toggleReportsList = () => {
  reportsList.classList.toggle('hidden-elem');
};

// Структура html для списка медиапланов:
// ---------------------------------
const mediaplansDataLoadedHtml = `  
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>

      <div class="media-plans-list__elem__rdy media-plan-elem-rdy">
        <i class="fa-solid fa-check"></i>
        <p class="media-plan-elem-rdy__text">Медиаплан от 18.04.2025 готов</p>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <button class="media-plans-box__show-more-btn">
        Показать еще
      </button>
    </li>
`;

const mediaplansDataEmpty = `
  <ul class="media-plans-box__list media-plans-list-empty">
    <i class="fa-regular fa-folder-closed"></i>
    <p class="media-plans-list__empty-text">Вы можете загрузить медиапланы нажав на кнопку в чате</p>
  </ul>
`;

// Структура html для списка отчетов:
// ---------------------------------
const reportsDataLoadedHtml = `  
    <li class="reports-list__elem">
      <div class="reports-list__elem__company reports-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="reports-company__name">Companyname 11/23</p>
        <div class="reports-company__download download-process">
          <i class="fa-solid fa-arrow-rotate-left"></i>
        </div>
      </div>

      <div class="reports-list__elem__dev reports-elem-dev report-dev-process">
        <i class="fa-solid fa-exclamation"></i>
        <p class="reports-elem-dev__text">Отчет формируется</p>
      </div>
    </li>
    <li class="reports-list__elem">
      <div class="reports-list__elem__company reports-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="reports-company__name">Companyname 11/23</p>
        <div class="reports-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="reports-list__elem">
      <div class="reports-list__elem__company reports-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="reports-company__name">Companyname 11/23</p>
        <div class="reports-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="reports-list__elem">
      <button class="reports-box__show-more-btn">
        Показать еще
      </button>
    </li>
`;

const reportsDataEmpty = `  
  <ul class="reports-box__list reports-list-empty">
    <i class="fa-regular fa-folder-closed"></i>
    <p class="reports-list__empty-text">Вы можете загрузить отчеты нажав на кнопку в чате</p>
  </ul>
`;

// Создание элемента-сообщения для чата:
// Сообщение помощника:
const createAssistantChatMsg = (assistantMsg) => {
  const assistantChatMsg = document.createElement('div');
  assistantChatMsg.classList.add('app-chat__messages__message', 'assitant-msg');
  assistantChatMsg.innerHTML = `
      <div class="assitant-msg__body">
        <div class="assitant-msg__body__photo">
          <i class="fa-regular fa-user"></i>
        </div>
        <div class="assitant-msg__body__text">
          <span>${assistantMsg}</span>
        </div>
      </div>
      <div class="assitant-msg__info">
        <span class="assitant-msg__from">Jim</span>
        <span class="assitant-msg__info__time">${getCurrentTime()}</span>
      </div>
  `;

  return assistantChatMsg;
};

// Сообщение пользователя:
const createUserChatMsg = (userMsg) => {
  const userChatMsg = document.createElement('div');
  userChatMsg.classList.add('app-chat__messages__message', 'my-msg');
  userChatMsg.innerHTML = `
    <div class="my-msg__body">
      <div class="my-msg__body__text">
        <span>${userMsg}</span>
      </div>
    </div>
    <div class="my-msg__info">
      <span class="my-msg__info__time">${getCurrentTime()}</span>
    </div>
  `;

  return userChatMsg;
};

// Добавление сообщения в чат:
export const addAssitantMsgToChat = (message) => {
  hideElem(chatMessagesCap); // скрыть "заглушку" пустого чата и отобразить сообщение
  showElem(chatMsgList);
  const messageElem = createAssistantChatMsg(message);

  chatMsgList.append(messageElem);
};

export const addUserMsgToChat = (message) => {
  hideElem(chatMessagesCap); // скрыть "заглушку" пустого чата и отобразить сообщение
  showElem(chatMsgList);

  const messageElem = createUserChatMsg(message);

  chatMsgList.append(messageElem);
};

// Рамка вокруг чата при фокусе:
export const renderChatBorderOnFocus = (option) => {
  option
    ? chatBody.classList.add('chat-active')
    : chatBody.classList.remove('chat-active');
};
