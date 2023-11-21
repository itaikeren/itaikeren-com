const getTimeAgo = (date: Date) => {
  const currentDate = new Date();
  const providedDate = new Date(date);
  const timeDifference = Math.abs(currentDate.getTime() - providedDate.getTime()) / 1000;

  const intervals = [
    { label: "y", seconds: 31536000 },
    { label: "m", seconds: 2592000 },
    { label: "d", seconds: 86400 },
    { label: "h", seconds: 3600 },
    { label: "min", seconds: 60 },
    { label: "sec", seconds: 1 }
  ];

  for (let i = 0; i < intervals.length; i++) {
    const { label, seconds } = intervals[i];
    const value = Math.floor(timeDifference / seconds);

    if (value >= 1) {
      return `(${value}${label} ago)`;
    }
  }

  return "Just now";
};

function NoteDate({ date }: { date: Date }) {
  const timeAgo = getTimeAgo(date);
  return (
    <div className="mb-5 mt-2 font-mono text-xs font-medium">
      {date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}{" "}
      {timeAgo}
    </div>
  );
}

export default NoteDate;
