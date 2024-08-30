import ProgressBar from "progressbar.js";
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-bar--js");
  if (progressBar) {
    const fullCourses = progressBar.dataset["all"];
    const currentCourses = progressBar.dataset["current"];
    console.log(fullCourses);
    if (`${fullCourses}${currentCourses}`.length > 4) {
      progressBar.classList.add("progress-bar__line--lit");
    }
    const circle = new ProgressBar.Circle(".progress-bar--js", {
      color: "#721C82",
      strokeWidth: 12,
      trailWidth: 0,
      progress: currentCourses / fullCourses,
      text: {
        value: `<b><span class='progress-bar__current'>${currentCourses}</span><span>/${fullCourses}</span></b><div>Пройдено</div>`,
      },
    });

    circle.set(currentCourses / fullCourses);
    // var bar = new ProgressBar.Path(".progress-js__line", {
    //   easing: "easeInOut",
    //   duration: 1400,
    // });
  }
});
