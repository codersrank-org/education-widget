import { fetchData } from './shared/fetch-data';
import { formatData } from './shared/format-data';
import { render } from './shared/render';
import { renderError } from './shared/render-error';
import { renderLoading } from './shared/render-loading';

// eslint-disable-next-line
const COMPONENT_TAG = 'codersrank-education';
const STATE_IDLE = 0;
const STATE_LOADING = 1;
const STATE_ERROR = 2;
const STATE_SUCCESS = 3;

// eslint-disable-next-line
const STYLES = `$_STYLES_$`;

// eslint-disable-next-line
class CodersrankEducation extends HTMLElement {
  constructor() {
    super();

    this.shadowEl = this.attachShadow({ mode: 'closed' });
    this.tempDiv = document.createElement('div');

    this.stylesEl = document.createElement('style');
    this.stylesEl.textContent = STYLES;
    this.shadowEl.appendChild(this.stylesEl);

    this.mounted = false;

    this.state = STATE_IDLE;

    this.data = null;
  }

  static get observedAttributes() {
    return ['username', 'grid', 'max-items'];
  }

  get username() {
    return this.getAttribute('username');
  }

  set username(value) {
    this.setAttribute('username', value);
  }

  get grid() {
    const grid = this.getAttribute('grid');
    if (grid === 'true' || grid === '') return true;
    return false;
  }

  set grid(value) {
    this.setAttribute('grid', value);
  }

  get maxItems() {
    const maxItems = parseInt(this.getAttribute('max-items') || 0, 10) || 0;
    return maxItems;
  }

  set maxItems(value) {
    this.setAttribute('max-items', value);
  }

  set ['max-items'](value) {
    this.setAttribute('max-items', value);
  }

  get education() {
    return this.getAttribute('education') !== 'false';
  }

  set education(value) {
    this.setAttribute('education', value);
  }

  get certificates() {
    return this.getAttribute('certificates') !== 'false';
  }

  set certificates(value) {
    this.setAttribute('certificates', value);
  }

  get certificateLinkText() {
    return this.getAttribute('certificate-link-text') || 'See certification';
  }

  set certificateLinkText(value) {
    this.setAttribute('certificate-link-text', value);
  }

  set ['certificate-link-text'](value) {
    this.setAttribute('certificate-link-text', value);
  }

  get certificateLink() {
    return this.getAttribute('certificate-link') !== 'false';
  }

  set certificateLink(value) {
    this.setAttribute('certificate-link', value);
  }

  set ['certificate-link'](value) {
    this.setAttribute('certificate-link', value);
  }

  get educationSectionTitle() {
    return this.getAttribute('education-section-title') || '';
  }

  set educationSectionTitle(value) {
    this.setAttribute('education-section-title', value);
  }

  set ['education-section-title'](value) {
    this.setAttribute('education-section-title', value);
  }

  get certificatesSectionTitle() {
    return this.getAttribute('certificates-section-title') || '';
  }

  set certificatesSectionTitle(value) {
    this.setAttribute('certificates-section-title', value);
  }

  set ['certificates-section-title'](value) {
    this.setAttribute('certificates-section-title', value);
  }

  get branding() {
    return this.getAttribute('branding') !== 'false';
  }

  set branding(value) {
    this.setAttribute('branding', value);
  }

  render() {
    const {
      username,
      mounted,
      state,
      shadowEl,
      data,
      grid,
      education,
      certificates,
      certificateLink,
      certificateLinkText,
      educationSectionTitle,
      certificatesSectionTitle,
      branding,
    } = this;
    const ctx = {
      data,
      grid,
      education,
      certificates,
      certificateLink,
      certificateLinkText,
      educationSectionTitle,
      certificatesSectionTitle,
      branding,
    };

    if (!username || !mounted) return;
    if (state === STATE_SUCCESS) {
      this.tempDiv.innerHTML = render(ctx);
    } else if (state === STATE_ERROR) {
      this.tempDiv.innerHTML = renderError(ctx);
    } else if (state === STATE_IDLE || state === STATE_LOADING) {
      this.tempDiv.innerHTML = renderLoading(ctx);
    }

    let widgetEl = shadowEl.querySelector('.codersrank-education');
    if (widgetEl) {
      widgetEl.parentNode.removeChild(widgetEl);
    }
    widgetEl = this.tempDiv.querySelector('.codersrank-education');
    if (!widgetEl) return;
    this.widgetEl = widgetEl;
    shadowEl.appendChild(widgetEl);
  }

  loadAndRender() {
    const { username } = this;
    this.state = STATE_LOADING;
    this.render();
    fetchData(username)
      .then((data) => {
        this.data = formatData(data, this.maxItems);
        this.state = STATE_SUCCESS;
        this.render();
      })
      .catch(() => {
        this.state = STATE_ERROR;
        this.render();
      });
  }

  attributeChangedCallback() {
    if (!this.mounted) return;
    this.loadAndRender();
  }

  connectedCallback() {
    this.mounted = true;
    this.loadAndRender();
  }

  disconnectedCallback() {
    this.mounted = false;
  }
}

// EXPORT
