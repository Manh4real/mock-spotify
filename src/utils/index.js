export function formatMinute(s) {
  let minutes = Math.trunc(s / 60);
  let seconds = Math.trunc(s % 60);

  return minutes + ": " + padStart(seconds);
}

export function padStart(n) {
  return n >= 10 ? n : "0" + n;
}
export function truncate(str, num = 20) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function timeToString(ms) {
  let seconds = ms / 1000;
  const hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60);

  if (hours > 0) return hours + "hr " + minutes + " min";
  return minutes + " min " + seconds + " sec";
}
