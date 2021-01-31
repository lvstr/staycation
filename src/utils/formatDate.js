// eslint-disable-next-line import/no-anonymous-default-export
export default (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("end", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

  return `${da} ${mo}`;
};
