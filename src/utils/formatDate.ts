const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = zeroPadLeft(date.getUTCDate());
  const month = zeroPadLeft(date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

function zeroPadLeft(value: number | string): string {
  return String(value).padStart(2, '0');
}

export default formatDate;