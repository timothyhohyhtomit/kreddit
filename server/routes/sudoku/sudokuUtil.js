export const DIFFICULTY = {
    EASY: 0,
    MEDIUM: 1,
    HARD: 2,
    EXPERT: 3,
    MASTER: 4
};

export const validateDifficulty = (difficulty) => {
    if (typeof difficulty !== "number" && !(difficulty instanceof Number)) throw new Error("Invalid Difficulty");
    else if (difficulty < DIFFICULTY.EASY || difficulty > DIFFICULTY.MASTER) throw new Error("Difficulty out of range");
    return;
};

export const validateProblem = (problem) => {
    if (typeof problem !== "string" && !(problem instanceof String)) throw new Error("Problem in wrong format");
    else if (problem.length !== 81) throw new Error("Problem must be of length 81, but has length " + problem.length);
    for (let i = 0; i < problem.length; i++) {
        const d = problem.charCodeAt(i);
        if (d < 48 || d > 57) throw new Error("Problem must contain only digit 1 to 9 or x");
    }
    return;
};