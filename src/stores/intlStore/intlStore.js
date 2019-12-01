import { observable, action } from 'mobx';
import { addLocaleData } from 'react-intl';

const languageKey = 'language';

export default class IntlStore {
  loadedLanguages = [];
  @observable messages;
  @observable language;

  constructor() {
    this.initData();
  }

  @action changeLanguage(language) {
    if (this.loadedLanguages.includes(language)) {
      this.language = this.setStoreLanguage(language);

      return;
    }

    this.addLocale(language);
    this.addMessage(language);
  }

  @action setMessages(messages) {
    this.messages = messages;
  }

  @action setLanguage(language) {
    this.language = language;
  }

  initData() {
    const language = localStorage.getItem(languageKey) || this.setStoreLanguage('en');

    this.addLocale(language);
    this.addMessage(language);
  }

  async addLocale(language) {
    const localeData = await import(`react-intl/locale-data/${language}`);

    addLocaleData(localeData.default);
    this.loadedLanguages.push(language);
  }

  async addMessage(language) {
    const messages = await import(`../../locales/${language}`);

    this.setMessages(messages);
    this.setLanguage(this.setStoreLanguage(language));
  }

  setStoreLanguage(language) {
    localStorage.setItem(languageKey, language);

    return language;
  }
}
