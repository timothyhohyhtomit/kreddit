import { expect } from "chai";

import { validateTitle } from "../../../routes/post/postUtil.js";
import { post } from "../../../constant.js";

describe("Test postUtil.js", () => {
    describe("Test validateTitle()", () => {
        it("On input of number type, should throw NOT_STRING error", () => {
            const titleInt = 2024;
            expect(() => validateTitle(titleInt)).to.throw(post.create.title.error.NOT_STRING);
            const titleDouble = 3.14159;
            expect(() => validateTitle(titleDouble)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of boolean type, should throw NOT_STRING error", () => {
            const titleBooleanTrue = true;
            expect(() => validateTitle(titleBooleanTrue)).to.throw(post.create.title.error.NOT_STRING);
            const titleBooleanFalse = false;
            expect(() => validateTitle(titleBooleanFalse)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of object type, should throw NOT_STRING error", () => {
            const titleObjEmpty = {};
            expect(() => validateTitle(titleObjEmpty)).to.throw(post.create.title.error.NOT_STRING);
            const titleObjNonempty = {
                make: "Subaru",
                model: "Crosstrek",
                year: 2013,
                colour: "Grey"
            };
            expect(() => validateTitle(titleObjNonempty)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of array type, should throw NOT_STRING error", () => {
            const titleArrayEmpty = [];
            expect(() => validateTitle(titleArrayEmpty)).to.throw(post.create.title.error.NOT_STRING);
            const titleArrayNonempty = [1, 1, 2, 3, 5, 8, 13];
            expect(() => validateTitle(titleArrayNonempty)).to.throw(post.create.title.error.NOT_STRING);
        });
        it("On input of an empty string, should throw an IS_EMPTY error", () => {
            const titleEmptyString = "";
            expect(() => validateTitle(titleEmptyString)).to.throw(post.create.title.error.IS_EMPTY);
        });
        it("On input of a string longer than MAX_LENGTH, should throw an EXCEED_LIMIT error", () => {
            const titleLongString = "x".repeat(post.create.title.MAX_LENGTH + 1);
            expect(() => validateTitle(titleLongString)).to.throw(post.create.title.error.EXCEED_LIMIT);
        });
        it("On input of a valid string, should not throw any error and return", () => {
            const titleAlphabetic = "Nostalgia";
            expect(() => validateTitle(titleAlphabetic)).to.not.throw();
            const titleAlphanumeric = "Denver,CO";
            expect(() => validateTitle(titleAlphanumeric)).to.not.throw();
            const titleAlphanumericSpace = "Beethoven: Moonlight Sonata 3rd Mov.";
            expect(() => validateTitle(titleAlphanumericSpace)).to.not.throw();
        });
    });
    describe("Test validateContent()", () => {});
});