function formatTime(time: number) {
  if (!time) return "0h 0m";

  const timeInHours = Math.floor(time / 60);
  const timeInMinutes = time % 60;
  return `${timeInHours}h ${timeInMinutes.toString().padStart(2, "0")}m`;
}

export default formatTime;
