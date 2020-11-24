export const formatData = (data = { education: [], certificates: [] }, maxItems) => {
  let education = data.education || [];
  let certificates = data.certificates || [];
  if (maxItems) {
    education = education.slice(0, maxItems);
    certificates = certificates.slice(0, maxItems);
  }
  return { education, certificates };
};
