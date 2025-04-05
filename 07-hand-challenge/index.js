const CASE_ONE =
  "👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊";
const CASE_TWO =
  "👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊";

const MIN_VALUE = 0;
const MAX_VALUE = 255;
function translate(string) {
  let memory = [0];
  let pointer = 0;
  let index = 0;
  let output = "";

  const instructions = Array.from(string);

  const getNextFist = () => {
    let fistCount = 1;
    for (let i = index + 1; i < instructions.length; i++) {
      if (instructions[i] === "🤜") fistCount++;
      if (instructions[i] === "🤛") fistCount--;
      if (fistCount === 0) return i;
    }
  };

  const getPreviousFist = () => {
    let fistCount = 1;
    for (let i = index - 1; i >= 0; i--) {
      if (instructions[i] === "🤜") fistCount--;
      if (instructions[i] === "🤛") fistCount++;
      if (fistCount === 0) return i;
    }
  };

  const actions = {
    "👉": () => {
      pointer++;
      memory[pointer] ??= 0;
    },
    "👈": () => {
      pointer--;
      memory[pointer] ??= 0;
    },
    "👆": () => {
      const value = memory[pointer];
      memory[pointer] = value === MAX_VALUE ? MIN_VALUE : value + 1;
    },
    "👇": () => {
      const value = memory[pointer];
      memory[pointer] = value === MIN_VALUE ? MAX_VALUE : value - 1;
    },
    "🤜": () => {
      if (memory[pointer] === 0) {
        index = getNextFist();
      }
    },
    "🤛": () => {
      if (memory[pointer] !== 0) {
        index = getPreviousFist();
      }
    },
    "👊": () => {
      output += String.fromCharCode(memory[pointer]);
    },
  };

  while (index < instructions.length) {
    const instruction = instructions[index];
    actions[instruction]();

    //   console.log({
    //     i: index,
    //     inst: instruction,
    //     pointer,
    //     out: output,
    //   });

    index++;
  }

  return output;
}

console.log({ "Case One": translate(CASE_ONE) });
console.log({ "Case Two": translate(CASE_TWO) });

module.exports = translate;
