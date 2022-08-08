/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {(string[]|null)} Copy of sorted array; null if arr is not an array or wrong param
 */
export function sortStrings(arr, param = "asc") {
  const order = {
    asc: 1,
    desc: -1,
  };

  if (Array.isArray(arr) || order[param]) {
    return [...arr].sort(function (a, b) {
      return (
        order[param] * a.localeCompare(b, ["ru", "en"], { caseFirst: "upper" })
      );
    });
  }

  return null;
}
