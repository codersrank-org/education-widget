import { codersrRankLogo } from './codersrank-logo';

export const render = ({
  data: { education = [], certificates = [] },
  grid,
  preloader,
  education: showEducation,
  certificates: showCertificates,
  certificationLink,
  certificationLinkText,
  educationSectionTitle,
  certificatesSectionTitle,
  branding,
} = {}) => {
  const formatDate = (date) => {
    if (!date) return '';
    const formatter = Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
    return formatter.format(new Date(date));
  };

  const dates = (item) => {
    const startDate = formatDate(item.startDate || item.dateFrom);
    const endDate = item.currentlyStudyingHere
      ? 'Present'
      : formatDate(item.endDate || item.dateTo);
    return `${startDate} - ${endDate}`;
  };

  // prettier-ignore
  return /* html */ `
    <div class="codersrank-education ${preloader ? 'codersrank-education-loading' : ''}">
      ${preloader ? /* html */ `
      <div class="codersrank-education-preloader"></div>
      ` : ''}
      ${education.length > 0 && showEducation ? /* html */`

      ${educationSectionTitle ? /* html */`
      <div class="codersrank-education-section-title">${educationSectionTitle}</div>
      ` : ''}
      <ul ${grid ? 'class="codersrank-education-grid"' : ''}>
        ${education.map((item) => /* html */`
        <li class="codersrank-education-item">
            ${item.school ? /* html */`
            <div class="codersrank-education-title">
              ${ item.school }
            </div>
            ` : ''}

            ${item.degree || item.field ? /* html */`
            <div class="codersrank-education-details">
              ${ [item.degree, item.field].filter((el) => !!el).join(', ') }
            </div>
            ` : ''}

            ${dates(item) ? /* html */`
            <div class="codersrank-education-date">
              ${ dates(item) }
            </div>
            ` : ''}

            ${item.description ? /* html */`
            <div class="codersrank-education-description">
              ${ item.description }
            </div>
            ` : ''}
        </li>
        `).join('')}
      </ul>
      ` : ''}
      ${certificates.length > 0 && showCertificates ? /* html */`
      ${certificatesSectionTitle ? /* html */`
      <div class="codersrank-education-section-title">${certificatesSectionTitle}</div>
      ` : ''}
      <ul ${grid ? 'class="codersrank-education-grid"' : ''}>
        ${certificates.map((item) => /* html */`
        <li class="codersrank-education-item">
            ${item.organization ? /* html */`
            <div class="codersrank-education-title">
              ${ item.organization }
            </div>
            ` : ''}

            ${item.name ? /* html */`
            <div class="codersrank-education-details">
              ${ item.name }
            </div>
            ` : ''}

            ${item.date ? /* html */`
            <div class="codersrank-education-date">
              ${ formatDate(item.date) }
            </div>
            ` : ''}

            ${item.certificationID ? /* html */`
            <div class="codersrank-education-description">
              ${ item.certificationID }
            </div>
            ` : ''}
            ${item.certificationURL && certificationLink ? /* html */`
            <div class="codersrank-education-certificate-link">
              <a href="${item.certificationURL}" target="_blank" rel="noopener noreferrer">${ certificationLinkText }</a>
            </div>
            ` : ''}
        </li>
        `).join('')}
      </ul>
      ` : ''}
      ${branding ? /* html */`
      <div class="codersrank-education-branding">
        <a href="https://codersrank.io" target="_blank" rel="noopener noreferrer">
          <span>Powered by </span>
          ${codersrRankLogo}
        </a>
      </div>
      ` : ''}
    </div>
  `;
};
