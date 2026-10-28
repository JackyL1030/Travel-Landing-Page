export default function formatDate(date: string) {
  const month = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    timeZone: "UTC",
  });

  const year = date.split("-")[0];
  const day = date.split("-")[2];

  return `${month} ${day} ${year}`;
}
