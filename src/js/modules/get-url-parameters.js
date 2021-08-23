export default function getUrlParameters(url, parameter) {
  const currentURL = url;
  const parameterValue = currentURL.searchParams.get(parameter);
  if (parameterValue !== undefined) {
    return parameterValue;
  }
  return true;
}
