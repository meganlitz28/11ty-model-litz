const target = document.querySelector("[data-sim-target]");
const note = document.getElementById("sim-note");

document.querySelectorAll("input[name=sim]").forEach((radio) =>
  radio.addEventListener("change", () => {
    if (!target) return;
    target.classList.remove("sim-low", "sim-cvd", "sim-key");
    if (radio.value !== "none") target.classList.add("sim-" + radio.value);
    note.hidden = radio.value !== "key";
  }),
);
