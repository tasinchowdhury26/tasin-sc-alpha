export const copyText = (text, name) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${name} has been copied to clipboard`);
    })
    .catch((err) => {
      console.error("Unable to copy: ", err);
    });
};
